import React from 'react';
import {Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import ForecastContainer from '../containers/ForecastContainer';
import DetailedDay from '../components/DetailedDay';

export default (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home} />
			<Route path='/forecast/:city' component={ForecastContainer} />
			<Route path='/detail/:city' component={DetailedDay} />
		</Route>
	</Router>
);