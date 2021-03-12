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
        const top = await axios.get('https://api.jikan.moe/v3/top/anime');
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
        return await axios.get(`https://api.jikan.moe/v3/schedule/${ day }`);
    } catch {
        return false;
    }
};