import React from "react";
import Images from "../../Components/SlideShow/SlideShowImagesData"
import Slideshow from "../../Components/SlideShow/SlideShow";
import SubscriptionForm from "../../Components/SubscriptionForm/SubscriptionForm";
import {EventsCards} from "../../Components/Events/EventsCards";
import Donation from "../../Components/Donation/Donation";
// import "./Home.css"

const HomePage : React.FC = () =>{

    return(
        <>
            <div className="home-page">
                <div>
                    <Slideshow images={Images} interval={4000}/>
                </div>
                <div className="subscription">
                    <SubscriptionForm />
                </div>
                <div className="min-h-screen bg-gray-100">
                    <EventsCards/>
                </div>

                <div className="donation">
                    <Donation />
                </div>
            </div>

        </>

    );
}

export default HomePage;