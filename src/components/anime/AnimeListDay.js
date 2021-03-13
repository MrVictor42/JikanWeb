import React, { useState, useEffect } from 'react';

import { getListAnimeDay } from '../../api/anime';
import { dayOfWeek } from '../../services/auxServices';

import ListAnime from '../lists/ListAnime';

const AnimeListDay = () => {

    const [loading, setLoading] = useState(true);
    const [animeList, setAnimeList] = useState([]);
    const [day, setDay] = useState();

    useEffect(() => {
		getAnimeListDay();
    }, []);

    async function getAnimeListDay() {
		setLoading(true);
        const day = dayOfWeek();
		const anime = await getListAnimeDay(day);

        switch(day) {
            case 'sunday':
                setAnimeList(anime.data.sunday);
                break;
            case 'monday':
                setAnimeList(anime.data.monday);
                break;
            case 'tuesday':
                setAnimeList(anime.data.tuesday);
                break;
            case 'wednesday':
                setAnimeList(anime.data.wednesday);
                break;
            case 'thursday':
                setAnimeList(anime.data.thursday);
                break;
            case 'friday':
                setAnimeList(anime.data.friday);
                break;
            case 'saturday':
                setAnimeList(anime.data.saturday);
                break;
        }
        setDay(day);
        setLoading(false);
	}

    return (
        <ListAnime 
            animeList = { animeList } loading = { loading } 
            messageType = {` Anime List of ${ day } `}
            message = 'Loading Anime List Day, Wait For ...'
        />
    )
};

export default AnimeListDay;