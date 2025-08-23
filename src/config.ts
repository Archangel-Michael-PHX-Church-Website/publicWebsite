let apiUrl = "http://localhost:5107/api"; // fallback
const config = {
    API_URL: process.env.REACT_APP_API_URL || apiUrl,
};

export default config;
