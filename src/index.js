import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
const inlineStyle = {
	color: 'red',
};
ReactDOM.render(
	<h1 className='greeting' style={inlineStyle}>
		Hello, Welcome to React world.
	</h1>,
	document.getElementById('root')
);
