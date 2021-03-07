import { currentSeasonAnime } from './auxServices';

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;

export const currentSeason = currentSeasonAnime(currentMonth);
export const apiListAnime = 'https://api.jikan.moe/v3/season/' + currentYear + '/' + currentSeason; 