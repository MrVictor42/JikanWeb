import React from 'react';
import { Route } from 'react-router-dom';

import Homepage from './components/homepage/Homepage';
import TableAnime from './components/anime/TableAnime';
import TableManga from './components/manga/TableManga';
import DetailAnimeSearch from './components/anime/DetailAnimeSearch';
import ListManga from './components/manga/ListManga';
import ListTopAnime from './components/anime/ListTopAnime';
import Contact from './components/contact/Contact';

const BaseRouter = () => (
    <>
        <Route exact path = '/' component = { Homepage } />
        <Route exact path = '/list_anime' component = { Homepage } />
        <Route path = '/top_anime' component = { ListTopAnime } />
        <Route exact path = '/list_manga' component = { ListManga } />
        <Route path = '/table_anime' component = { TableAnime } />
        <Route path = '/table_manga' component = { TableManga } />
        <Route path = '/anime/:slug' component = { DetailAnimeSearch } />
        <Route path = '/contact' component = { Contact } />
    </>
);

export default BaseRouter;