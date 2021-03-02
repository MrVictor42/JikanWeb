import axios from 'axios';

export default axios.create({ 
    baseURL: 'https://jikan-api.herokuapp.com/api/',
});

//baseURL: 'http://localhost:8080/api/',