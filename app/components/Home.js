import React from 'react';
import WeatherFormContainer from '../containers/WeatherFormContainer';

export default () => (
	<div className='texture-bg'>
		<div className='home vertical-align col-md-6 col-md-offset-3 text-center'>
			<h1>Enter a City and State</h1>
			<WeatherFormContainer />
		</div>
	</div>
);