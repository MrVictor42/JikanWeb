import React from 'react';
import { Route } from 'react-router-dom';

import Homepage from './components/homepage/Homepage';
import DetailAnime from './components/anime/DetailAnime';
import TableAnime from './components/anime/TableAnime';
import ListManga from './components/manga/ListManga';

const BaseRouter = () => (
    <>
        <Route exact path = '/' component = { Homepage } />
        <Route exact path = '/list_anime' component = { Homepage } />
        <Route exact path = '/list_manga' component = { ListManga } />
        <Route path = '/anime/:slug' component = { DetailAnime } />
        <Route path = '/table_anime' component = { TableAnime } />
    </>
);

export default BaseRouter;