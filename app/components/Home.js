import React from 'react';
import WeatherForm from './WeatherForm';

export default () => (
	<div className='texture-bg'>
		<div className='home vertical-align col-md-6 col-md-offset-3 text-center'>
			<h1>Enter a City and State</h1>
			<WeatherForm />
		</div>
	</div>
);