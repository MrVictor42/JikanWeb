import React from 'react';

import Filterbar from '../layout/Filterbar';
import ListAnime from '../anime/ListAnime';

const Homepage = () => {
    return (
        <>
            <Filterbar />
            <ListAnime />
        </>
    );
}

export default Homepage;