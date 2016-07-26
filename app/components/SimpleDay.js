import React from 'react';
import moment from 'moment';

function formatDate(timestamp) {
	return moment(timestamp * 1000).format('dddd, MMMM DD');
}

const SimpleDay = (props) => (
	<div>
		<img src={`/app/images/weather-icons/${props.icon}.svg`} alt={props.text} />
		<h3>{formatDate(props.date)}</h3>
	</div>
);

SimpleDay.propTypes = {
	icon: React.PropTypes.string.isRequired,
	text: React.PropTypes.string.isRequired,
	date: React.PropTypes.number.isRequired
};

export default SimpleDay;