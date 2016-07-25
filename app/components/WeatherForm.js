import React from 'react';

export default () => (
	<form>
		<div className='form-group'>
	    	<input type='text' className='form-control' placeholder='St. George, Utah' />
	    </div>
      	<div className='form-group'>
      		<button className='btn btn-block btn-success' type='submit'>Get Weather</button>
      	</div>
	</form>
);