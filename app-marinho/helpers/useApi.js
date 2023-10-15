import axios from 'axios';

const api = axios.create({
    baseURL: 'https://causal-loving-sawfish.ngrok-free.app'
});

export default api;