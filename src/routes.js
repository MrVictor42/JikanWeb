import React from 'react';
import { Route } from 'react-router-dom';

import Homepage from './components/homepage/Homepage';
import DetailAnimeSearch from './components/anime/DetailAnimeSearch';
import AdvancedSearch from './components/search/AdvancedSearch';
import MangaList from './components/manga/MangaList';
import AnimeListTop from './components/anime/AnimeListTop';
import Contact from './components/contact/Contact';

const BaseRouter = () => (
    <>
        <Route exact path = '/' component = { Homepage } />
        <Route exact path = '/list_anime' component = { Homepage } />
        <Route path = '/top_anime' component = { AnimeListTop } />
        <Route exact path = '/list_manga' component = { MangaList } />
        <Route path = '/anime/:slug' component = { DetailAnimeSearch } />
        <Route path = '/contact' component = { Contact } />
        <Route path = '/advanced_search' component = { AdvancedSearch } />
    </>
);

export default BaseRouter;