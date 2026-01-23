import React, { useEffect, useState } from 'react';
import './SoundCloud.css';
import config from "../../config";
import { SoundCloudItem } from "./SoundCloudTrack";

type Props = {
    filterType?: "Track" | "Playlist" | "Both";
};

const SoundCloudTracks: React.FC<Props> = ({ filterType = "Both" }) => {
    const [tracks, setTracks] = useState<SoundCloudItem[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTracks = async () => {
            try {
                const response = await fetch(`${config.API_URL}/SoundCloud/tracks`);
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
    }, []);

    if (loading) return <div className="track-loading">Loading Tracks...</div>;

    // Apply filterType
    const filteredTracks = tracks.filter(t => {
        if (filterType === "Both") return true;
        return t.type === filterType;
    });

    const trackItems = filteredTracks.filter(t => t.type === "Track");
    const playlistItems = filteredTracks.filter(t => t.type === "Playlist");

    return (
        <div className="soundcloud-container">
            {error && <div className="error">{error}</div>}

            {/* --- TRACKS SECTION --- */}
            {trackItems.map((item, index) => (
                <div key={index} className="soundcloud-item track">
                    <div dangerouslySetInnerHTML={{ __html: item.embedUrl }} />
                </div>
            ))}

            {/* --- PLAYLIST HEADER --- */}
            {playlistItems.length > 0 && (
                <h2 className="playlist-header">Bible Study Playlist</h2>
            )}

            {/* --- PLAYLISTS SECTION --- */}
            {playlistItems.map((item, index) => (
                <div key={index} className="soundcloud-item playlist">
                    <div dangerouslySetInnerHTML={{ __html: item.embedUrl }} />
                </div>
            ))}
        </div>
    );
};

export default SoundCloudTracks;