import React from "react";
// import ChurchVideo from "../../Assets/Videos/AM_Church_Drone.mp4";
import ChurchVideo from "../../Assets/Images/AM_Church_Drone.gif"
import "./ChurchDroneGif.css"

const ChurchDroneGif :React.FC = () => {
    return(
        <>
            <div className="church-drone-gif-container">
                <img src={ChurchVideo} alt="Church drone video" className="church-drone-gif"/>
            </div>
        </>
    )
}

export default ChurchDroneGif;