import React, { useEffect, useState } from 'react';
import './SoundCloud.css';
import config from "../../config";
import {SoundCloudItem} from "./SoundCloudTrack";

type Props = {
    count: number;
};

const SoundCloudTracks: React.FC<Props> = ({ count }) => {
    const [tracks, setTracks] = useState<SoundCloudItem[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchTracks = async () => {
            try {
                const response = await fetch(`${config.API_URL}/SoundCloud/tracks?count=${count}`);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const data: SoundCloudItem[] = await response.json();
                setTracks(data);
            } catch (err) {
                setError('Failed to load SoundCloud tracks.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchTracks();
    }, [count]);
    if (loading) return <div className="track-loading">Loading Tracks...</div>;

    return (
        <div className="soundcloud-container">
            {error && <div className="error">{error}</div>}
            {tracks.map((item, index) => (
                <div key={index} className={`soundcloud-item ${item.type.toLowerCase()}`}>
                    <div dangerouslySetInnerHTML={{ __html: item.embedUrl }} />
                </div>
            ))}
        </div>
    );
};

export default SoundCloudTracks;