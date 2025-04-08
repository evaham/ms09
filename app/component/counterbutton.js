import React, { useState } from 'react';

const CounterButton = () => {
	const [count, setCount] = useState(0);

	const handleIncrement = () => {
		setCount(count + 1);
	};

	const handleDecrement = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	return (
		<div className="relative  flex w-40 h-6 border bg-slate-700 rounded-full">
			<p className="absolute flex items-center justify-center inset-0">{count}</p>
			<button onClick={handleDecrement} className="flex-1 flex justify-start ml-1 items-center z-10">
				<svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#e8eaed"><path d="M200-440v-80h560v80H200Z" /></svg>
			</button>
			<button onClick={handleIncrement} className="flex-1 flex justify-end mr-1 items-center z-10">
				<svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
			</button>
		</div>
	);
};

export default CounterButton;