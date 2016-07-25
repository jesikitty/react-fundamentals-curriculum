import React from 'react';
import styles from '../main.css';
import WeatherFormContainer from '../containers/WeatherFormContainer';

export default (props) => (
	<div className='container-fluid'>
		<header>
			<WeatherFormContainer />
			<h1 className='vertical-align'>Weather App</h1>
		</header>
		{props.children}
	</div>
);