import React from 'react';
import moment from 'moment';

function formatDate(timestamp) {
	return moment(timestamp * 1000).format('dddd, MMMM DD');
}

export default (props) => (
	<div>
		<img 
			src={`/app/images/weather-icons/${props.icon}.svg`} 
			alt={props.main}
		/>
		<h3>{formatDate(props.date)}</h3>
	</div>
);