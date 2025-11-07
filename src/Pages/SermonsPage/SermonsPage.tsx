import React from "react";
import YoutubePastStreams from "../../Components/Sermons/Sermons";

const SermonsPage : React.FC = () =>{
    return (
        <div style={{ padding: "20px" }}>
            <h2 className="youtube-title">Sermons</h2>
            <YoutubePastStreams />
        </div>
    );
}
export default SermonsPage;
