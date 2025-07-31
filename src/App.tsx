import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";

const App: React.FC = () => {
    return (
        <div>
            <Navbar />
            {/*<CurvedHeader/>*/}
            <main>
                <h1>Archangel Micheal American Coptic Orthodox Church</h1>
                <HomePage/>
            </main>
            <div>
                {/*<Footer/>*/}
            </div>

        </div>
    );
};

export default App;
