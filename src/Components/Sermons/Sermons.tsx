import React, { useEffect, useState } from "react";
import "./Sermons.css"
import {Video} from "./VidoData"
import config from "../../config"

const YoutubePastStreams: React.FC = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const res = await fetch(`${config.API_URL}/sundayyoutube/latest-completed?count=4`);
                if (!res.ok) throw new Error("Failed to fetch videos");
                const data = await res.json();
                setVideos(data);
            } catch (err) {
                console.error("Error fetching videos:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchVideos();
    }, []);

    if (loading) return <div className="video-loading">Loading videos...</div>;
    if (videos.length === 0)
        return <div className="video-empty">No recent streams found.</div>;

    return (
        <div className="youtube-section">
            <div className="youtube-grid">
                {videos.map((v) => (
                    <div key={v.videoId} className="youtube-card">
                        <div className="youtube-frame">
                            <iframe
                                src={`https://www.youtube.com/embed/${v.videoId}`}
                                title={v.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default YoutubePastStreams;
