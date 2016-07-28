import React from 'react';
import WeatherFormContainer from '../containers/WeatherFormContainer';

export default () => (
	<div className='textured-background'>
		<div className='vertical-center'>
			<h1>Enter a City and State</h1>
			<WeatherFormContainer style={'blockForm'} />
		</div>
	</div>
);