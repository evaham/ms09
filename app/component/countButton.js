'use client';
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
		<div className="relative flex w-full h-6">
			
			<button onClick={handleDecrement} className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100">
				<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" className="fill-black"><path d="M200-440v-80h560v80H200Z" /></svg>
			</button>
			<p className="flex-1 flex items-center justify-center inset-0 mx-0.5 text-sm">{count}</p>
			<button onClick={handleIncrement} className="flex items-center justify-center w-6 h-6 ml-auto rounded-full bg-gray-100">
				<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" className="fill-black"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
			</button>
		</div>
	);
};

export default CounterButton;