import React from 'react';
import weatherMapHelpers from '../utils/weatherMapHelpers';
import Forecast from '../components/Forecast';

class ForecastContainer extends React.Component {
	constructor(props) {
	  	super(props);
	  	this.state = {isLoading: props.isLoading};
	}

	componentDidMount() {
		weatherMapHelpers.fetchCurrentWeather(this.props.routeParams.city)
			.then(weather => {
				this.setState({isLoading: false});
			});
		// weatherMapHelpers.fetchFiveDayForecast(location);
	}

	render() {
		return <Forecast isLoading={this.state.isLoading} />;
	}
}

ForecastContainer.defaultProps = { isLoading: true };

export default ForecastContainer;