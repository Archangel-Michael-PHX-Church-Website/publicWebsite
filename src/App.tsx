import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import CalendarPage from "./Pages/CalendarPage/CalendarPage";
import SermonsPage from "./Pages/SermonsPage/SermonsPage";
import ArticlesPage from "./Pages/ArticlesPage/ArticlesPage";
import BibleStudyPage from "./Pages/BibleStudyPage/BibleStudyPage";
import Intercession from "./Components/Articles/Intercession";
import Icons from "./Components/Articles/Icons";
import Eucharist from "./Components/Articles/Eucharist";
import Priesthood from "./Components/Articles/Priesthood";
import Sacraments from "./Components/Articles/Sacraments"
import Traditions from "./Components/Articles/Traditions";
import ScrollToTop from "./Components/Support/ScrollToTop";



const App: React.FC = () => {
    return (
        <Router>
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/calendar" element={<CalendarPage/>}/>
                <Route path="/sermons" element={<SermonsPage/>}/>
                <Route path="/articles" element={<ArticlesPage/>}/>
                <Route path="/bible" element={<BibleStudyPage/>}/>

                <Route path="/Intercession" element={<Intercession/>}/>
                <Route path="/Icons" element={<Icons/>}/>
                <Route path="/Eucharist" element={<Eucharist/>}/>
                <Route path="/Priesthood" element={<Priesthood/>}/>
                <Route path="/Sacraments" element={<Sacraments/>}/>
                <Route path="/Traditions" element={<Traditions/>}/>

            </Routes>
            <Footer/>
        </Router>
    );
};

export default App;
