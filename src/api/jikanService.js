import axios from 'axios';

export default axios.create({ 
    baseURL: 'https://jikan-api.herokuapp.com/api',
});

//'http://localhost:8080/api/'
//'https://jikan-api.herokuapp.com/api/'
