// baseURL.js

import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://api.rsudrsoetomo.jatimprov.go.id/sipp/', // Set your base URL here
    headers: {
        'Content-Type': 'application/json',
        'x-authorization-token-sipp': 'YOUR_TOKEN_HERE', // Replace with your actual token
    },
});

export default instance;

