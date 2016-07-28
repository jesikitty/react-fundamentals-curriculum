import React from 'react';
import { Link } from 'react-router';
import WeatherFormContainer from '../containers/WeatherFormContainer';

export default () => (
	<header>
		<h1 className='vertical-center'>
			<Link to='/'>Weather App</Link>
		</h1>
		<div className='vertical-center'>
			<WeatherFormContainer style={'inlineForm'} />
		</div>
	</header>
);