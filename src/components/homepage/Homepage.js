import React from 'react';

import { currentSeason } from '../../services/consts';

import ListAnime from '../anime/ListAnime';
import ListAnimeDay from '../anime/ListAnimeDay';

const Homepage = () => {
    return (
        <>
            <ListAnimeDay />
            <ListAnime 
                message = 'Loading Anime List, Wait For ...'
                messageType = { `Anime List of Season ${ currentSeason }` }
            />
        </>
    );
}

export default Homepage;