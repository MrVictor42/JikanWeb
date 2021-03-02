import React from 'react';
import { Route } from 'react-router-dom';

import Homepage from './components/homepage/Homepage';
import DetailAnime from './components/anime/DetailAnime';
import DetailManga from './components/manga/DetailManga';
import TableAnime from './components/anime/TableAnime';
import TableManga from './components/manga/TableManga';
import ListManga from './components/manga/ListManga';

const BaseRouter = () => (
    <>
        <Route exact path = '/' component = { Homepage } />
        <Route exact path = '/list_anime' component = { Homepage } />
        <Route exact path = '/list_manga' component = { ListManga } />
        <Route path = '/anime/:slug' component = { DetailAnime } />
        <Route path = '/manga/:slug' component = { DetailManga } />
        <Route path = '/table_anime' component = { TableAnime } />
        <Route path = '/table_manga' component = { TableManga } />
    </>
);

export default BaseRouter;