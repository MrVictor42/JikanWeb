import React from 'react';

import AnimeList from '../anime/AnimeList';
import AnimeListDay from '../anime/AnimeListDay';

const Homepage = () => {
    return (
        <>
            <AnimeListDay />
            <AnimeList />
        </>
    );
}

export default Homepage;