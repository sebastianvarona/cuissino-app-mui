import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-[rgba(255,255,255,0.9)] dark:bg-[rgba(21,28,35,0.8)] rounded-md p-2 shadow-customL dark:shadow-customD">
        <p className="text-lg font-semibold border-b mb-2 text-gray-500 dark:text-gray-300">
          {label}
        </p>
        <p className="text-[#26b86e] text-base">
          <span className="bg-[#26b86e] inline-block h-2 w-2 rounded-full mr-1"></span>
          {`Profit: ${payload[0].value}`}
        </p>
        <p className="text-[#eb5c68] text-base">
          <span className="bg-[#eb5c68] inline-block h-2 w-2 rounded-full mr-1"></span>
          {`Costs: ${payload[0].value}`}
        </p>
      </div>
    );
  }

  return null;
};

export default function LineChartC({ data }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid vertical={false} strokeDasharray="5 5" />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey="name"
          tick={{ fill: '#9ca3af' }}
        />
        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af' }} />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          verticalAlign="top"
          align="right"
          height={50}
          iconType="circle"
        />
        <Line
          type="monotone"
          dataKey="Revenue"
          strokeWidth="4"
          stroke="#26b86e"
        />
        <Line
          type="monotone"
          dataKey="Costs"
          strokeWidth="4"
          stroke="#eb5c68"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
