import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { ConfigProvider } from 'antd';
import en_US from 'antd/es/locale/en_US';

import App from './App';
import './css/index.css';

import authReducer from './store/authReducers/authReducer';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
	auth: authReducer
});

const store = createStore(rootReducer, composeEnhances(applyMiddleware(thunk)));

const app = (
	<ConfigProvider locale = { en_US }>
		<Provider store = { store } >
			<App />
		</Provider>
	</ConfigProvider>
);

ReactDOM.render(app, document.getElementById('root'));