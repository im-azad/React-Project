import React from 'react';
import Card from './components/CARD';
import State from './components/STATE/State';

function App() {
	return (
		<div>
			<h1 className='learn-react'>Learn React</h1>
			<Card
				cardTitle='Card Component One'
				cardFooter='React is Awesome'
			/>
			<Card
				cardTitle='Card Component Two'
				cardFooter='React is Beautiful'
			/>
			<State />
		</div>
	);
}
export default App;
