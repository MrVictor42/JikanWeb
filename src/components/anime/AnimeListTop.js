import React, { useState, useEffect } from 'react';

import { getListTopAnime } from '../../api/anime';

import ListAnime from '../lists/ListAnime';

const AnimeListTop = () => {

    const [loading, setLoading] = useState(true);
    const [animeList, setAnimeList] = useState([]);

    useEffect(() => {
        syncList();
    },[]);

    async function syncList() {
        setLoading(true);
        const top = await getListTopAnime();
        setAnimeList(top);
        setLoading(false);
    }

    return (
        <ListAnime
            animeList = { animeList } loading = { loading } 
            messageType = 'Top List Anime'
            message = 'Loading Anime List TOP!, Wait For ...'
        />
    )
};

export default AnimeListTop;