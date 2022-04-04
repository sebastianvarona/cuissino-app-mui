import React from 'react'
import { PieChart, Pie, Tooltip, Sector, Cell, ResponsiveContainer } from 'recharts';


const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-[rgba(255,255,255,0.9)] dark:bg-[rgba(21,28,35,0.8)] rounded-md p-2 shadow-customL dark:shadow-customD">
        <p className="text-base">{`${payload[0].name}`}</p>
      </div>
    );
  }

  return null;
};


export default function PieChartC({data}) {
	return (
		<ResponsiveContainer width="100%" height={350}>
			<PieChart width={500} height={500}>
				<Pie data={data} dataKey="value" cx="50%" cy="50%" innerRadius={60} outerRadius={90} fill="#82ca9d" label />
				<Tooltip content={<CustomTooltip />} />
			</PieChart>
		</ResponsiveContainer>
	);
}
