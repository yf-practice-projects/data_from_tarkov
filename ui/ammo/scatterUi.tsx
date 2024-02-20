"use client"

import { ammo } from "@/definitions/ammo"
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface props { 
	data:ammo[]
}

export default function ScatterUi({ data }:props) {
	return (
		<ResponsiveContainer width="100%" height="75%">
			<ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
				<CartesianGrid />
				<XAxis type="number" dataKey="penetration" name="penetration" unit="pen" />
				<YAxis type="number" dataKey="damage" name="damage" unit="dmg" />
				<Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }}/>
				<Legend />
				<Scatter name="ammo" data={data} fill="#8884d8" />
			</ScatterChart>
		</ResponsiveContainer>
	)
}


interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

// カスタムTooltipコンポーネント
const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
	if (active && payload && payload.length) {
		return (
			<div>
				<p>{`name : ${payload[0].payload.name}`}</p>
				<p>{`damage: ${payload[0].payload.damage}`}</p>
				<p>{`penetration: ${payload[0].payload.penetration}`}</p>
			</div>
		);
	}
}