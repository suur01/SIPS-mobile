// baseURL.js

import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://apidev.rsudrsoetomo.jatimprov.go.id/sipp/', // Set your base URL here
    timeout: 5000, // Set a timeout for requests
    headers: {
        'Content-Type': 'application/json',
        // Add common headers here
        // Authorization: 'Bearer YOUR_ACCESS_TOKEN',
        // Other common headers...
    },
});

export default instance;
