import axios from 'axios';

import baseURL from './jikanService';

export const getListGender = async() => {

    axios.defaults.headers = {
		'Content-Type': 'application/json',
    }

    try {
        return await baseURL.get('gender/list');
    } catch {
        return false;
    }
};