import React from 'react';
import styles from '../main.css';
import WeatherForm from './WeatherForm';

export default (props) => (
	<div className='container-fluid'>
		<header>
			<WeatherForm />
			<h1 className='vertical-align'>Weather App</h1>
		</header>
		{props.children}
	</div>
);