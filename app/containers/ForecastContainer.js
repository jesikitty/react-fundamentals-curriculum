import React from 'react';
import weatherMapHelpers from '../utils/weatherMapHelpers';
import Forecast from '../components/Forecast';

class ForecastContainer extends React.Component {
	constructor(props) {
	  	super(props);
	  	this.state = {
	  		isLoading: props.isLoading,
	  		weather: []
	  	};
	}
	
	componentDidMount() {
		this.updateWeatherData(this.props.params.city);
	}

	componentWillReceiveProps(props) {
		this.setState({isLoading: true});
		this.updateWeatherData(props.params.city);
	}

	updateWeatherData(city) {
		weatherMapHelpers.fetchFiveDayForecast(city)
			.then(weather => {
				this.setState({
					isLoading: false,
					weather: weather.list
				});
			});
	}

	handleDayClick(weather) {
		this.context.router.push({
			pathname: '/detail/' + this.props.params.city,
			state: { weather: weather }
		});
	}

	render() {
		return <Forecast 
			isLoading={this.state.isLoading}
			city={this.props.routeParams.city}
			onDayClick={(event) => this.handleDayClick(event)} 
			weather={this.state.weather} />;
	}
}

ForecastContainer.contextTypes = { router: React.PropTypes.object.isRequired };
ForecastContainer.defaultProps = { 
	isLoading: true, 
	weather: []
};

export default ForecastContainer;