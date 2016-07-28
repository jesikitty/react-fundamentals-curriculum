import React from 'react';
import SimpleDay from './SimpleDay';

function kelvinToFahrenheit(temp) {
	return Math.round(temp * (9/5) - 459.67);
}

export default (props) => {
	const data = props.location.state.weather;
	return (<div>
				<SimpleDay
					icon={data.weather[0].icon}
					text={data.weather[0].main}
					date={data.dt}
				/>
	
				<p>
					{props.params.city} <br />
					{data.weather[0].description} <br />
					min temp: {kelvinToFahrenheit(data.temp.min)} degrees<br />
					max temp: {kelvinToFahrenheit(data.temp.max)} degrees<br />
					humidity: {data.humidity}
				</p>
			 </div>);
};