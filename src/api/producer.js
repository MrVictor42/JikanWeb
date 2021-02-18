import axios from 'axios';

import baseURL from './jikanService';

export const getListProducer = async() => {

    axios.defaults.headers = {
		'Content-Type': 'application/json',
    }

    try {
        return await baseURL.get("producer/list");;
    } catch {
        return false;
    }
};