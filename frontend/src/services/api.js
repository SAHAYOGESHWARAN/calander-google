
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    withCredentials: true, // To send cookies
});

export const createEvent = (eventData) => api.post('/events', eventData);

// Implement other API calls as needed

export default api;
