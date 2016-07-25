import React from 'react';
import WeatherForm from '../components/WeatherForm';

class WeatherFormContainer extends React.Component {
	handleSubmitLocation(event) {
		event.preventDefault();
		console.log(event.target.children[0].children[0].value);
	}

	render() {
		return <WeatherForm onSubmitLocation={this.handleSubmitLocation} />
	}
};

export default WeatherFormContainer;