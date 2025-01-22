import axios from "axios";
let authToken = null;
let tokenExpiry = null; 

const getAuthToken = async (AUTH_APP_ENDPOINT, API_KEY) => {
    try {

        console.log('start getAuthToken ', AUTH_APP_ENDPOINT,API_KEY);
        const response = await axios.post(AUTH_APP_ENDPOINT,  {
            headers: {
                'x-api-key': API_KEY
            },
            data: {
                username: 'machine',
            }
        });
        authToken = response.data.token;
        console.log('Auth token:', authToken); 

        const currentTime = Math.floor(Date.now() / 1000);
        
        if (req.auth.exp && req.auth.exp < currentTime) {
            return res.status(401).json({ error: 'Token expired' });
        }

        tokenExpiry = Date.now() + response.data.expires_in * 1000; // Assuming expires_in is in seconds
    } catch (error) {
        console.error('Error fetching auth token:', error);
        throw error;
    }
};

const isTokenValid = () => {
    if(!authToken || !tokenExpiry) {
        console.log("no authtoken or tokenExpiry");
        return false;
    }
    return Date.now() < tokenExpiry;
}

export { getAuthToken, isTokenValid, authToken };