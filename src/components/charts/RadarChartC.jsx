import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


export default function RadarChartC({data}) {
	return (
		<ResponsiveContainer width="100%" height={500}>
			<RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
				<PolarGrid />
				<PolarAngleAxis dataKey="subject" />
				<PolarRadiusAxis />
				<Radar name="Mike" dataKey="A" stroke="#8884d8" strokeWidth="3" fill="#8884d8" fillOpacity={0.6} />
			</RadarChart>
		</ResponsiveContainer>
	);
}
