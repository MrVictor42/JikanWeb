import React from 'react';

import ListAnime from '../anime/ListAnime';
import ListAnimeDay from '../anime/ListAnimeDay';

const Homepage = () => {
    return (
        <>
            <ListAnimeDay />
            <ListAnime search = { false } message = 'Loading Anime List, Wait For ...'/>
        </>
    );
}

export default Homepage;