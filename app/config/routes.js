import React from 'react';
import {Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from '../components/Main';

export default (
	<Router history={hashHistory}>
		<Route path='/' component={Main} />
	</Router>
);

// <Route path='/' component={Main}>
// 	<IndexRoute component={Home} />
// </Route>