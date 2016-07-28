import React from 'react';
import WeatherForm from '../components/WeatherForm';

class WeatherFormContainer extends React.Component {
	handleSubmitLocation(event) {
		event.preventDefault();
		const input = event.target.children[0],
			  location = input.value;
		input.value = '';

		this.context.router.push('/forecast/' + location);
	}

	render() {
		return <WeatherForm 
			onSubmitLocation={(event) => this.handleSubmitLocation(event)} 
			style={this.props.style}
		/>
	}
};

WeatherFormContainer.contextTypes = { router: React.PropTypes.object.isRequired };
WeatherFormContainer.propTypes = { style: React.PropTypes.string.isRequired };

export default WeatherFormContainer;