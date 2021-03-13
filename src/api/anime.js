import axios from 'axios';

import baseURL from './jikanService';
import { currentSeason, currentYear } from '../services/consts';

export const getListAnime = async() => {

    axios.defaults.headers = {
		'Content-Type': 'application/json',
    }

    try {
        const anime = await baseURL.get(`season/${ currentYear }/${ currentSeason }`);
        return anime.data.anime;
    } catch {
        return false;
    }
};

export const getAnimeDetailFromJikan = async(mal_id) => {

    axios.defaults.headers = {
		'Content-Type': 'application/json',
    }

    try {
        const detail = await baseURL.get(`anime/${ mal_id }`);
        return detail.data;
    } catch {
        return false;
    }
};

export const getListTopAnime = async() => {

    axios.defaults.headers = {
		'Content-Type': 'application/json',
    }

    try {
        const top = await baseURL.get('top/anime');
        return top.data.top;
    } catch {
        return false;
    }
}

export const getListAnimeDay = async(day) => {

    axios.defaults.headers = {
		'Content-Type': 'application/json',
    }

    try {
        return await baseURL.get(`schedule/${ day }`);
    } catch {
        return false;
    }
};

export const getListSearchGenre = async(type, genre_id) => {

    axios.defaults.headers = {
		'Content-Type': 'application/json',
    }

    try {
        const search = await baseURL.get(`genre/${ type }/${ genre_id }`) 
        return search.data.anime;
    } catch {
        return false;
    }
};