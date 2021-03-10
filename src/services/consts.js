import { currentSeasonAnime } from './auxServices';

const currentMonth = new Date().getMonth() + 1;
export const currentYear = new Date().getFullYear();
export const currentSeason = currentSeasonAnime(currentMonth);