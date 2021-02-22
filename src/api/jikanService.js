import axios from 'axios';

export default axios.create({ 
    baseURL: 'https://jikan-api.herokuapp.com/api/',
});