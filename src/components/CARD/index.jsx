import React from 'react';
import './card.css';

function Card(props) {
	const { cardTitle, cardFooter } = props;
	return (
		<div className='card-body'>
			<h3 className='card-title'>{cardTitle}</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit harum
				repellendus consequatur voluptate minus.
			</p>
			<p className='card-footer'>{cardFooter}</p>
		</div>
	);
}

export default Card;
