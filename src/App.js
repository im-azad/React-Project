import React from 'react';
import Card from './components/CARD';

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
			<Card cardTitle='Card Component One' cardFooter='React is Easy' />
		</div>
	);
}
export default App;
