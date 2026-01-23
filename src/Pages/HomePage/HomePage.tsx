import React from "react";
import Images from "../../Components/SlideShow/SlideShowImagesData"
import Slideshow from "../../Components/SlideShow/SlideShow";
import SubscriptionForm from "../../Components/SubscriptionForm/SubscriptionForm";
import {EventsCards} from "../../Components/Events/EventsCards";
import Donation from "../../Components/Donation/Donation";
import YoutubePastStreams from "../../Components/Sermons/Sermons";
import SoundCloudTracks from "../../Components/Soundcloud/SoundCloud";

import "./HomePage.css"
import Services from "../../Components/Services/Services";

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
                <div className="Current-week">
                    <h2 className="youtube-title"><span style={{color:"#86566a"}}> LIVE</span> This week</h2>
                    <div className="Current-week-content">
                        <div className="Current-week-column">
                            <YoutubePastStreams count={1} />
                        </div>
                        <div className="Current-week-column">
                            <SoundCloudTracks filterType="Track" />
                        </div>
                    </div>
                </div>
                <div className="Current-week">
                    <h2 className="youtube-title">Church Ministries</h2>
                    <Services/>
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