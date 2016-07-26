import React from 'react';
import SimpleDay from './SimpleDay';

function formatDays(days, onDayClick) {
	return days.map((day, index) => (
		<div key={index} className='day' onClick={onDayClick.bind(null, day)}>
			<SimpleDay 
				icon={day.weather[0].icon} 
				text={day.weather[0].main} 
				date={day.dt}
			/>
		</div>
	));
}

const Forecast = (props) => (
	props.isLoading
	? <h2>LOADING</h2>
	: <div className='days-wrapper'>
		<h2>{props.city}</h2>
		{formatDays(props.weather, props.onDayClick)}
	  </div>
);

Forecast.propTypes = {
	isLoading: React.PropTypes.bool.isRequired,
	city: React.PropTypes.string.isRequired,
	onDayClick: React.PropTypes.func.isRequired,
	weather: React.PropTypes.array.isRequired
};

export default Forecast;