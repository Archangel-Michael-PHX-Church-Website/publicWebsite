import React from "react";
// import SoundCloudList from "../../Components/Soundcloud/SoundCloud";
import SoundCloudTracks from "../../Components/Soundcloud/SoundCloud";

const BibleStudyPage : React.FC = () =>{
    return (
        <div style={{ padding: "20px" }}>
            <h2 className="soundcloud-title">Bible Study</h2>
            <SoundCloudTracks count={5} />
        </div>
    );
}

export default BibleStudyPage;