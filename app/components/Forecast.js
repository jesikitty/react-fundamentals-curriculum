import React from 'react';
import moment from 'moment';

function getDate(timestamp) {
	return moment(timestamp * 1000).format('dddd, MMMM DD');
}

function formatDays(days) {
	return days.map((day, index) => (
		<div key={index} className='day'>
			<img 
				src={`/app/images/weather-icons/${day.weather[0].icon}.svg`} 
				alt={day.weather[0].main}
			/>
			<h3>{getDate(day.dt)}</h3>
		</div>
	));
}

export default (props) => (
	props.isLoading
	? <h2>LOADING</h2>
	: <div className='days-wrapper'>
		<h2>{props.city}</h2>
		<div>
			{formatDays(props.weather)}
		</div>
	  </div>
);