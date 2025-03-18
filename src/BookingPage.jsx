import BookingForm from "./BookingForm.jsx"

export default function BookingPage({ availableTimes, updateTimes }) {
    return (
        <>
            <h1 className="h1 text-center pt-8 pb-4">Book a table!</h1>
            <BookingForm
                availableTimes={availableTimes}
                updateTimes={updateTimes}
            />
        </>
    )
}