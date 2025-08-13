'use client';
import React, { useState } from 'react';

const CounterButton = ({item, onChange, active}) => {
	// const [count, setCount] = useState(0);
	const handleIncrement = () => {
		if (item.count < item.orderlimit) {
			onChange(item.id, item.count + 1);
		}else {
			alert(`최대 ${item.orderlimit}개까지 구매 가능합니다.`);
		}
	};

	const handleDecrement = () => {
		onChange(item.id, Math.max(item.count - 1,0));
	};

	return (
		<>
			{ active  === true &&
				<div className="relative grid grid-cols-3 w-full items-center h-8 border border-slate-400 rounded-full">
					<button onClick={handleDecrement} className="flex items-left pl-3 cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" className="fill-black"><path d="M200-440v-80h560v80H200Z" /></svg>
					</button>
					<p className="flex-1 flex items-center justify-center inset-0 mx-auto text-lg">{item.count}</p>
					<button onClick={handleIncrement} className="flex items-center justify-center ml-auto pr-3 cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" className="fill-black"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
					</button>
				</div>
			}
			{ active === false &&
				<div className="relative grid grid-cols-3 w-full items-center h-8 border border-slate-100 bg-slate-100 rounded-full">
					<button className="flex items-center mr-auto pl-3 justify-center">
						<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" className="fill-slate-400"><path d="M200-440v-80h560v80H200Z" /></svg>
					</button>
					<p className="flex-1 flex items-center justify-center inset-0 mx-auto text-lg text-slate-300">0</p>
					<button className="flex items-center justify-center ml-auto pr-3">
						<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" className="fill-slate-400"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
					</button>
				</div>
			}

		</>

	);
};

export default CounterButton;