import React from 'react';

export default () => (
	<div id='home' className='texture-bg'>
		<div className='home vertical-align col-md-6 col-md-offset-3 text-center'>
			<h1>Enter a City and State</h1>
			<form>
				<div className='row'>
				  	<div className='form-group col-md-4 col-md-offset-4'>
				    	<input type='text' className='form-control' placeholder='St. George, Utah' />
				 	</div>
				</div>
				<div className='row'>
				  	<div className='form-group col-md-2 col-md-offset-5'>
				  		<button className='btn btn-block btn-success' type='submit'>Get Weather</button>
				  	</div>
				</div>
			</form>
		</div>
	</div>
);