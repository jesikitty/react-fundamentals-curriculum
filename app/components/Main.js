import React from 'react';
import styles from '../main.css';

export default (props) => (
	<div className='container-fluid'>
		<header><h1>Main.js Header</h1></header>
		{props.children}
	</div>
);