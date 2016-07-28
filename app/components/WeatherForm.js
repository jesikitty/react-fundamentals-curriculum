import React from 'react';

const WeatherForm = (props) => (
	<form onSubmit={props.onSubmitLocation} className='form-inline'>
    	<input type='text' className={`form-control ${props.style}`} placeholder='St. George, Utah' />
  		<button type='submit' className={`btn btn-block btn-success ${props.style}`}>Get Weather</button>
	</form>
);

WeatherForm.propTypes = {
	onSubmitLocation: React.PropTypes.func.isRequired,
	style: React.PropTypes.string.isRequired
};

export default WeatherForm;