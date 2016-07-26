import React from 'react';
import WeatherForm from '../components/WeatherForm';
import weatherMapHelpers from '../utils/weatherMapHelpers';

class WeatherFormContainer extends React.Component {
	handleSubmitLocation(event) {
		event.preventDefault();
		const location = event.target.children[0].children[0].value;
		// weatherMapHelpers.getCurrentWeather(location);
		// weatherMapHelpers.getFiveDayForecast(location);
		this.context.router.push('/forecast/' + location)

	}

	render() {
		return <WeatherForm onSubmitLocation={(event) => this.handleSubmitLocation(event)} />
	}
};

WeatherFormContainer.contextTypes = {
	router: React.PropTypes.object.isRequired
};

export default WeatherFormContainer;