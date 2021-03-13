import React, { useState, useEffect } from 'react';

import { getListAnime } from '../../api/anime';
import { currentSeason } from '../../services/consts';

import ListAnime from '../lists/ListAnime';

const AnimeList = () => {

    const [loading, setLoading] = useState(true);
    const [animeList, setAnimeList] = useState([]);

    useEffect(() => {
        syncList();
    },[]);

    async function syncList() {
        setLoading(true);
        const anime = await getListAnime();
        setAnimeList(anime);
        setLoading(false);
    }

    return (
        <ListAnime 
            animeList = { animeList } loading = { loading } 
            messageType = {` Anime List of Season ${ currentSeason } `}
            message = 'Loading Anime List, Wait For ...'
        />
    );
}

export default AnimeList;