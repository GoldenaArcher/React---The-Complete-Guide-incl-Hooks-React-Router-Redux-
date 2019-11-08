import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-d3e12.firebaseio.com/',
});

export default instance;