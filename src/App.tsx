import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Navbar from "./Components/Navbar/Navbar";

import HomePage from "./Pages/Home/Home";
import About from "./Pages/About/About";

import Footer from "./Components/Footer/Footer";
import CalendarPage from "./Pages/Calendar/Calendar";

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/calendar" element={<CalendarPage/>}/>
                {/*<Route path="/contact" element={<Contact />} />*/}
            </Routes>
            <Footer/>
        </Router>
    );
};

export default App;
