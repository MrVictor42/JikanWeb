import React from 'react';
import { Route } from 'react-router-dom';
import Hoc from './hoc/hoc';

import Homepage from './components/homepage/Homepage';
import DetailAnime from './components/anime/DetailAnime';
import TableAnime from './components/anime/TableAnime';

const BaseRouter = () => (
    <Hoc>
        <Route exact path = '/' component = { Homepage } />
        <Route path = '/anime/:slug' component = { DetailAnime } />
        <Route path = '/table_anime' component = { TableAnime } />
    </Hoc>
);

export default BaseRouter;