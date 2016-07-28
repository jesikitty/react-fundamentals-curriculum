import React from 'react';
import SimpleDay from './SimpleDay';

const Forecast = (props) => (
	props.isLoading
	? <h2>LOADING</h2>
	: <div>
		<h2>{props.city}</h2>
		<h3>Select a day!</h3>
		{props.weather.map((day, index) => (
			<div key={index} className='forecast-day' onClick={props.onDayClick.bind(null, day)}>
				<SimpleDay 
					icon={day.weather[0].icon} 
					text={day.weather[0].main} 
					date={day.dt}
				/>
			</div>
		))}
	  </div>
);

Forecast.propTypes = {
	isLoading: React.PropTypes.bool.isRequired,
	city: React.PropTypes.string.isRequired,
	onDayClick: React.PropTypes.func.isRequired,
	weather: React.PropTypes.array.isRequired
};

export default Forecast;