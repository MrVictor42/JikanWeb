import React from 'react';
import { Route } from 'react-router-dom';
import Hoc from './hoc/hoc';

import Homepage from './components/homepage/Homepage';
import DetailAnime from './components/anime/DetailAnime';

const BaseRouter = () => (
    <Hoc>
        <Route exact path = '/' component = { Homepage } />
        <Route path = '/anime/:slug' component = { DetailAnime } />
    </Hoc>
);

export default BaseRouter;