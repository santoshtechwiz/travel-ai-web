// index.js
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PrivacyPolicy from './Pages/Privacy';
import WonderPage from './Pages/Wonder';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import HotelPage from './Pages/HotelPage';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route  path="/plan" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/wonder" element={<WonderPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/search" element={<HotelPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
