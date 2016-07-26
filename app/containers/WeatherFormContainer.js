import React from 'react';
import WeatherForm from '../components/WeatherForm';

class WeatherFormContainer extends React.Component {
	handleSubmitLocation(event) {
		event.preventDefault();
		this.context.router.push('/forecast/' + event.target.children[0].children[0].value);
	}

	render() {
		return <WeatherForm onSubmitLocation={(event) => this.handleSubmitLocation(event)} />
	}
};

WeatherFormContainer.contextTypes = {
	router: React.PropTypes.object.isRequired
};

export default WeatherFormContainer;