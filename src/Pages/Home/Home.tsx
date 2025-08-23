import React from "react";
import ChurchDroneGif from "../../Components/ChurchDroneGif/ChurchDroneGif";
import Images from "../../Components/SlideShow/SlideShowImagesData"
import Slideshow from "../../Components/SlideShow/SlideShow";
import SubscriptionForm from "../../Components/SubscriptionForm/SubscriptionForm";
const HomePage : React.FC = () =>{
    return(
        <>
            {/*<ChurchDroneGif/>*/}
            <div>
                <Slideshow images={Images} interval={4000}/>
            </div>
            <div>
                <SubscriptionForm/>
            </div>



        </>

    );
}

export default HomePage;