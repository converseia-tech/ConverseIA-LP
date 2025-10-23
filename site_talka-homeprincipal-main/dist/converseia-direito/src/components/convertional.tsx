import { useState, useEffect } from 'react';
import { Card } from './card';

const Counter = ({ endValue }: { endValue: string }) => {
	const [value, setValue] = useState<number>(0);

	useEffect(() => {
		let start = 0;
		const end = Number.parseInt(endValue.replace('%', '').replace('+', ''), 10);
		if (start === end) return;

		const incrementTime = Math.abs(Math.floor(2000 / end));
		const timer = setInterval(() => {
			start += 1;
			setValue(start);
			if (start === end) clearInterval(timer);
		}, incrementTime);

		return () => clearInterval(timer);
	}, [endValue]);

	return (
		<span>
			{endValue.includes('%') || endValue.includes('+')
				? `${value}${endValue.slice(-1)}`
				: value}
		</span>
	);
};

export const Convertional = () => {
	return (
		<div className="flex flex-col base:mt-4 md:mt-0 gap-8 base:px-2 md:px-0">
			<div className="grid grid-row-1 base:grid-cols-1 md:grid-cols-3 gap-6">
				<Card
					highlight={<Counter endValue="95%" />}
					description="DOS CASOS ATENDIDOS"
				/>
				<Card
					highlight={<Counter endValue="32%" />}
					description="DE CONVERSÃO EM CLIENTES"
				/>
				<Card
					highlight={<Counter endValue="70%" />}
					description="DE ECONOMIA OPERACIONAL"
				/>
			</div>
		</div>
	);
};
