import './card.css';

// import React from 'react'; // Functional component
/* 
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

export default Card; */

// Class component
import React, { Component } from 'react';

export default class Card extends Component {
	render() {
		return (
			<div>
				<div className='card-body'>
					<h3 className='card-title'>{this.props.cardTitle}</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit
						harum repellendus consequatur voluptate minus.
					</p>
					<p className='card-footer'>{this.props.cardFooter}</p>
				</div>
			</div>
		);
	}
}
