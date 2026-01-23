import React from "react";
import "./UnderConstruction.css"

const UnderConstruction: React.FC = () => {
    return (
        <div className="uc-container">
            <div className="uc-content">
                <h1 className="uc-title">🚧 Page Under Construction</h1>
                <p className="uc-text">
                    We're working hard to bring this page to life. Check back soon.
                </p>
            </div>
        </div>
    );
};

export default UnderConstruction;