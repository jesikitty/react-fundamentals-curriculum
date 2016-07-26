import React from 'react';
import weatherMapHelpers from '../utils/weatherMapHelpers';
import Forecast from '../components/Forecast';

class ForecastContainer extends React.Component {
	componentDidMount() {
		weatherMapHelpers.fetchCurrentWeather(this.props.routeParams.city)
			.then(weather => console.log(weather));
		// weatherMapHelpers.fetchFiveDayForecast(location);
	}

	render() {
		return <Forecast />;
	}
}

export default ForecastContainer;