import { expect, test } from 'vitest';
import { availableTimesReducer, initializeTimes } from './App.jsx';

test("initializeTimes returns an array of times", () => {
    const times = initializeTimes();

    // Check that the result is an array
    expect(Array.isArray(times)).toBe(true);

    // Check that the array is not empty
    expect(times.length).toBeGreaterThan(0);

    // Check that all elements are strings
    times.forEach(time => {
        expect(typeof time).toBe('string');
    });
})

test("availableTimesReducer returns an array of times for tomorrow's date", () => {
    // Create tomorrow's date
    const tomorrow = new Date() + 1;

    // Use the reducer to get tomorrow's times
    const tomorrowTimes = availableTimesReducer([], {
        type: 'UPDATE_TIMES',
        payload: tomorrow
    });

    // Verify tomorrowTimes is also an array
    expect(Array.isArray(tomorrowTimes)).toBe(true);

    // Verify it has elements
    expect(tomorrowTimes.length).toBeGreaterThan(0);

    // All elements should be strings
    tomorrowTimes.forEach(time => {
        expect(typeof time).toBe('string');
    });
})