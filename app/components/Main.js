import React from 'react';
import Header from './Header'
import '../styles/bootstrap.min.css';
import '../styles/main.css';

export default (props) => (
	<div>
		<Header />
		<main>
			{props.children}
		</main>
	</div>
);