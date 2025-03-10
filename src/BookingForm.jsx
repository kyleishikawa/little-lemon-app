import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState, useCallback } from 'react';

export default function BookingForm({ availableTimes, updateTimes }) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Get today's date with time set to beginning of day for accurate comparison
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayStr = today.toISOString().split('T')[0];

    // Create a memoized date change handler to avoid unnecessary re-renders
    const handleDateChange = useCallback((e) => {
        const { value } = e.target;
        formik.handleChange(e);

        if (value) {
            const dateObj = new Date(value);
            updateTimes(dateObj);
        }
    }, [updateTimes]);

    // Create formik instance
    const formik = useFormik({
        initialValues: {
            date: '',
            time: '',
            guests: 1,
            occasion: ''
        },
        validationSchema: Yup.object({
            date: Yup.string()
                .required('Please select a date')
                .test('is-valid-date', 'Date cannot be in the past', value => {
                    if (!value) return true; // Skip validation if empty
                    return value >= todayStr;
                }),
            time: Yup.string()
                .required('Please select a time'),
            guests: Yup.number()
                .required('Please enter number of guests')
                .min(1, 'Must be at least 1 guest')
                .max(10, 'Maximum 10 guests allowed'),
            occasion: Yup.string()
                .oneOf(['Birthday', 'Engagement', 'Anniversary'], 'Please select a valid occasion')
        }),
        onSubmit: (values) => {
            console.log('Form submitted with values:', values);
            setIsSubmitted(true);
        },
    });

    // Remove the problematic useEffect

    if (isSubmitted) {
        return (
            <div className="text-center p-8 bg-gray-100 rounded-lg">
                <h2 className="h2">Reservation Confirmed!</h2>
                <p className="mt-4">Thank you for your reservation. We look forward to seeing you on {formik.values.date} at {formik.values.time}.</p>
                <button
                    className="button mt-6"
                    onClick={() => setIsSubmitted(false)}
                >
                    Make another reservation
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-primary-green rounded-xl text-white">
            <form onSubmit={formik.handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="date" className="block font-medium mb-1">
                        Date
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        className="w-full p-2 border rounded-md"
                        onChange={handleDateChange} // Use custom handler instead
                        onBlur={formik.handleBlur}
                        value={formik.values.date}
                        min={todayStr}
                    />
                    {formik.touched.date && formik.errors.date ? (
                        <div className="text-red-300 text-sm mt-1">{formik.errors.date}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="time" className="block font-medium mb-1">
                        Time
                    </label>
                    <select
                        id="time"
                        name="time"
                        className="w-full p-2 border rounded-md"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.time}
                    >
                        <option value="">Select a time</option>
                        {availableTimes.map(time => (
                            <option key={time} value={time}>{time}</option>
                        ))}
                    </select>
                    {formik.touched.time && formik.errors.time ? (
                        <div className="text-red-600 text-sm mt-1">{formik.errors.time}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="guests" className="block font-medium mb-1">
                        Number of guests
                    </label>
                    <input
                        type="number"
                        id="guests"
                        name="guests"
                        min="1"
                        max="10"
                        className="w-full p-2 border rounded-md"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.guests}
                    />
                    {formik.touched.guests && formik.errors.guests ? (
                        <div className="text-red-600 text-sm mt-1">{formik.errors.guests}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="occasion" className="block font-medium mb-1">
                        Occasion
                    </label>
                    <select
                        id="occasion"
                        name="occasion"
                        className="w-full p-2 border rounded-md"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.occasion}
                    >
                        <option value="">Select an occasion</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Engagement">Engagement</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                    {formik.touched.occasion && formik.errors.occasion ? (
                        <div className="text-red-600 text-sm mt-1">{formik.errors.occasion}</div>
                    ) : null}
                </div>

                <div className="text-center py-4">
                    <button
                        type="submit"
                        className="button text-black"
                        disabled={formik.isSubmitting}
                    >
                        {formik.isSubmitting ? 'Submitting...' : 'Submit Reservation'}
                    </button>
                </div>
            </form>
        </div>
    );
}