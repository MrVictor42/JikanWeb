import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Hoc from './hoc/hoc';

import Homepage from './components/homepage/Homepage';

const BaseRouter = (props) => (
    <Hoc>
        {
            props.token === null ? (
                <Route exact path = '/' component = { Homepage } />
            ) : (
                <div>
                    
                </div>
            )
        }
    </Hoc>
);

const mapStateToProps = state => {
    return { token: state.auth.token };
};

export default withRouter(connect(mapStateToProps)(BaseRouter));