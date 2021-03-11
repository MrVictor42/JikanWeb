import axios from 'axios';

import baseURL from './jikanService';

export const getListManga = async() => {

    axios.defaults.headers = {
		'Content-Type': 'application/json',
    }

    try {
        return await baseURL.get('top/manga');
    } catch {
        return false;
    }
};

export const getManga = async(mal_id) => {

    axios.defaults.headers = {
		'Content-Type': 'application/json',
    }

    try {
        const detail = await baseURL.get(`manga/${ mal_id }`);
        return detail.data;
    } catch {
        return false;
    }
};