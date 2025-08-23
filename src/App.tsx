import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";

const App: React.FC = () => {
    return (
        <div>
            <Navbar />
            <main>
                <HomePage/>
            </main>

                <Footer/>

        </div>
    );
};

export default App;
