import axios from 'axios';

import baseURL from './jikanService';

export const getListAnime = async() => {

    axios.defaults.headers = {
		'Content-Type': 'application/json',
    }

    try {
        return await baseURL.get("anime/list");;
    } catch {
        return false;
    }
};