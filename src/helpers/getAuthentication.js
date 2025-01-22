import axios from "axios";
let authToken = null;
let tokenExpiry = null; 

const getAuthToken = async (AUTH_APP_ENDPOINT, API_KEY) => {
    try {
        console.log('start getAuthToken ', AUTH_APP_ENDPOINT,API_KEY);
        const response = await axios.post(AUTH_APP_ENDPOINT,
            {
                username: 'machine',
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': API_KEY,
                },
            }
        );

        console.table(response.data);
        authToken = response.data.accessToken;
        console.log('Auth token:', authToken); 

        const payload = JSON.parse(Buffer.from(authToken.split('.')[1], 'base64').toString());
        console.log('Token payload:', payload);
        tokenExpiry = payload.exp * 1000; // Assuming exp is in seconds and converting to milliseconds

        const currentTime = Math.floor(Date.now() / 1000);
        
        if (tokenExpiry && tokenExpiry < currentTime) {
            return res.status(401).json({ error: 'Token expired' });
        }

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

    if(Date.now() > tokenExpiry) {
        console.log("token expired");
        return false;
    }

    return true;
}

export { getAuthToken, isTokenValid, authToken };