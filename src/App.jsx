import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useReducer } from 'react';
import { fetchAPI } from './FormAPIs.jsx';

import './App.css'
import Header from './Header.jsx'
import Main from './MainElement.jsx'
import Footer from './Footer.jsx'
import BookingPage from './BookingPage.jsx'

export default function App() {
  const availableTimesReducer = (state, action) => {
    switch(action.type) {
      case 'UPDATE_TIMES':
        // Here you use fetchAPI with the date
        return fetchAPI(new Date(action.payload));
      default:
        return state;
    }
  };

  const initializeTimes = () => {
    // Initialize with today's date
    return fetchAPI(new Date());
  };

  const [availableTimes, dispatch] = useReducer(availableTimesReducer, [], initializeTimes);

  const updateTimes = (dateString) => {
    dispatch({
      type: 'UPDATE_TIMES',
      payload: dateString
    });
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              updateTimes={updateTimes}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}