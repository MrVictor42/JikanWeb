import axios from 'axios';

import baseURL from './jikanService';

export const getListManga = async() => {

    axios.defaults.headers = {
		'Content-Type': 'application/json',
    }

    try {
        return await baseURL.get('manga/list');
    } catch {
        return false;
    }
};