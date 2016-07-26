import React from 'react';
import weatherMapHelpers from '../utils/weatherMapHelpers';
import Forecast from '../components/Forecast';

class ForecastContainer extends React.Component {
	// weatherMapHelpers.getCurrentWeather(location);
	// weatherMapHelpers.getFiveDayForecast(location);

	render() {
		return <Forecast />;
	}
}

export default ForecastContainer;