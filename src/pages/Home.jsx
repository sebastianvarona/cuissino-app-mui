import React from 'react';
import CardOne from '../components/CardOne';
import CardChart from '../components/CardChart'
import CardAction from '../components/CardAction';
import LineChartC from '../components/charts/LineChartC';
import PieChartC from '../components/charts/PieChartC';
import RadarChartC from '../components/charts/RadarChartC';

export default function Home() {

	const revenueData = [
		{
			name: 'Page A',
			costs: 4000,
			profit: 2400,
		},
		{
			name: 'Page B',
			costs: 3000,
			profit: 1398,
		},
		{
			name: 'Page C',
			costs: 2000,
			profit: 9800,
		},
		{
			name: 'Page D',
			costs: 2780,
			profit: 3908,
		},
		{
			name: 'Page E',
			costs: 1890,
			profit: 4800,
		},
		{
			name: 'Page F',
			costs: 2390,
			profit: 3800,
		},
		{
			name: 'Page G',
			costs: 3490,
			profit: 4300,
		},
	];


	return (
		<div className="flex flex-col gap-6">
			<div className="flex gap-6 flex-wrap">
				<CardOne title="Revenue" icon="dollar-sign" data="$10,837,327" />
				<CardOne title="Sales" icon="trending-up" data="837" />
				<CardOne title="Cost" icon="trending-down" data="$350,238" />
			</div>
			<div className="flex gap-6">
				<div className="w-full max-w-[calc(100%-200px)]">
					<CardChart title="Summary">
						<LineChartC data={revenueData} />
					</CardChart>
				</div>
				<div className="flex-2 flex gap-6 flex-col min-w-[200px]">
					<CardAction title="Add order" icon="plus" />
					<CardAction title="Remove order" icon="minus" />
					<CardAction title="Add cost" icon="trending-down" />
					<CardAction title="Remove cost" icon="trending-up" />
				</div>
			</div>
		</div>
	)
}
