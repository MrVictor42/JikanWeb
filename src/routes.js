import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Hoc from './hoc/hoc';

import Homepage from './components/homepage/Homepage';

const BaseRouter = (props) => (
    <Hoc>
        <Route exact path = '/' component = { Homepage } />
    </Hoc>
);

export default BaseRouter;