import React from 'react';
import ReactDOM from 'react-dom';

function ListItem(props){
	return <li>{props.value}</li>;
}

//all elements inside the map() call need keys.
//key should be specified inside the array, not in the component
//keys should be unique amongst siblings
function NumberList(props){
	const numbers = props.numbers;
	return (
		<ul>
			{numbers.map((number) =>
				<ListItem key={number.toString()}
						value={number} />
			)}
		</ul>
	);
}

const numbers = [1,2,3,4,5];

ReactDOM.render(
	<NumberList numbers={numbers} />,
	document.getElementById('root')
);