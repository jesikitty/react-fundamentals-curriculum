import React from 'react';
import WeatherForm from '../components/WeatherForm';
import weatherMapHelpers from '../utils/weatherMapHelpers';

class WeatherFormContainer extends React.Component {
	handleSubmitLocation(event) {
		event.preventDefault();
		const location = event.target.children[0].children[0].value;
		weatherMapHelpers.getCurrentWeather();
	}

	render() {
		return <WeatherForm onSubmitLocation={this.handleSubmitLocation} />
	}
};

export default WeatherFormContainer;