import axios from 'axios';

import baseURL from './jikanService';

export const getListAnime = async() => {

    axios.defaults.headers = {
		'Content-Type': 'application/json',
    }

    try {
        return await baseURL.get('anime/list/');
    } catch {
        return false;
    }
};

export const getListAnimeAfterUpdate = async() => {

    axios.defaults.headers = {
		'Content-Type': 'application/json',
    }

    try {
        return await baseURL.get('anime/list/update');
    } catch {
        return false;
    }
}

export const getCountDatabase = async() => {

    axios.defaults.headers = {
		'Content-Type': 'application/json',
    }

    try {
        return await baseURL.get('anime/count');
    } catch {
        return false;
    }
}

export const getListTopAnime = async() => {

    axios.defaults.headers = {
		'Content-Type': 'application/json',
    }

    try {
        return await baseURL.get('topAnime/list');
    } catch {
        return false;
    }
};

export const getTopAnime = async(slug) => {

    axios.defaults.headers = {
		'Content-Type': 'application/json',
    }

    try {
        return await baseURL.get(`topAnime/${ slug }`);
    } catch {
        return false;
    }
};

export const getAnime = async(slug) => {

    axios.defaults.headers = {
		'Content-Type': 'application/json',
    }

    try {
        return await baseURL.get(`anime/${ slug }`);
    } catch {
        return false;
    }
};

export const getListAnimeByGender = async(gender_id) => {

    axios.defaults.headers = {
		'Content-Type': 'application/json',
    }

    try {
        return await baseURL.get(`anime/filterByGender/${ gender_id[0] }`);
    } catch {
        return false;
    }
};

export const getListAnimeDay = async(day) => {

    axios.defaults.headers = {
		'Content-Type': 'application/json',
    }

    try {
        return await axios.get(`https://api.jikan.moe/v3/schedule/${ day }`);
    } catch {
        return false;
    }
};