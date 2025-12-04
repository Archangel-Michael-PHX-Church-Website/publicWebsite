export interface SoundCloudItem {
    title: string;
    embedUrl: string; // already full <iframe> HTML
    type: "Track" | "Playlist";
}
