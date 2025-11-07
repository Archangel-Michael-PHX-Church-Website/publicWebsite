import React, { useEffect, useState } from "react";
import "./Sermons.css";
import { Video } from "./VidoData";
import config from "../../config";

interface YoutubePastStreamsProps {
    count?: number;
}

const YoutubePastStreams: React.FC<YoutubePastStreamsProps> = ({ count = 4 }) => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const res = await fetch(`${config.API_URL}/sundayyoutube/latest-completed?count=${count}`);
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
    }, [count]);

    if (loading) return <div className="video-loading">Loading videos...</div>;
    if (videos.length === 0)
        return <div className="video-empty">No recent streams found.</div>;

    const videosToRender = count === 1 ? videos.slice(0, 1) : videos;

    return (
        <div className="youtube-section">
            <div className="youtube-grid">
                {videosToRender.map((v) => (
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