import React from 'react';
import weatherMapHelpers from '../utils/weatherMapHelpers';
import Forecast from '../components/Forecast';

class ForecastContainer extends React.Component {
	constructor(props) {
	  	super(props);
	  	this.state = {isLoading: props.isLoading};
	}

	componentDidMount() {
		weatherMapHelpers.fetchFiveDayForecast(this.props.routeParams.city)
			.then(weather => {
				this.setState({
					isLoading: false,
					weather: weather.list
				});
			});
	}

	render() {
		return <Forecast 
			isLoading={this.state.isLoading}
			city={this.props.routeParams.city} 
			weather={this.state.weather} />;
	}
}

ForecastContainer.defaultProps = { isLoading: true };

export default ForecastContainer;