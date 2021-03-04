import axios from 'axios';

import baseURL from './jikanService';

export const getListAnime = async() => {

    axios.defaults.headers = {
		'Content-Type': 'application/json',
    }

    try {
        return await baseURL.get('anime/list');
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

export const getAnimeCarousel = async() => {

    axios.defaults.headers = {
		'Content-Type': 'application/json',
    }

    try {
        return await baseURL.get(`anime/carousel`);
    } catch {
        return false;
    }
}

export const getListAnimeByProducer = async(producer_id) => {

    axios.defaults.headers = {
		'Content-Type': 'application/json',
    }

    try {
        return await baseURL.get(`anime/filterByProducer/${ producer_id[0] }`);
    } catch {
        return false;
    }
};

export const getListAnimeByGenderAndProducer = async(gender_id, producer_id) => {

    axios.defaults.headers = {
		'Content-Type': 'application/json',
    }

    try {
        return await baseURL.get(`anime/filter/${ gender_id[0] }/${ producer_id[0] }`);
    } catch {
        return false;
    }
};