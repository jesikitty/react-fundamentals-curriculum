import React from 'react';
import DetailedDay from '../components/DetailedDay';

class DetailedDayContainer extends React.Component {
	componentDidMount() {
		console.log(this.props.location.state.weather);
	}

	render() {
		return <DetailedDay />
	}
}

export default DetailedDayContainer;