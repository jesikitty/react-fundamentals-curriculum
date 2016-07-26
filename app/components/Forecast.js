import React from 'react';

export default (props) => (
	props.isLoading
	? <h2>LOADING</h2>
	: <div>This will be the forecast!</div>
);