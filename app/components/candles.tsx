import React from "react";
import {
  Bar,
  Line,
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
  ErrorBar,
} from "recharts";

export interface CandlestickChartResponse {
  x: string;  // Date string
  open: number;
  close: number;
  high: number;
  low: number;
}

interface ChartProps {
  rawData: { data: CandlestickChartResponse[] } | null; 
}

const CandleStickChart: React.FC<ChartProps> = ({ rawData }) => {
  if (!rawData || !rawData.data) {
    return <p>No data currently avilable for this candlestick chart</p>;
  }

  // Transform the data: each data point will represent a "day"
  const chartData = rawData.data.map((d) => ({
    ...d,
    range: (d.high - d.low), // Range for the wicks
    openClose: [d.open, d.close], // Open and close values
    isUp: d.close > d.open, // Determine if it's a bullish or bearish candlestick
  }));
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" />
        <YAxis />
        <Tooltip />

        <Bar dataKey="openClose" barSize={20} fill="#8884d8">
          {chartData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.isUp ? "#00FF00" : "#FF0000"} // Green if close > open, red if open > close
            />
          ))}
          <ErrorBar dataKey="range" width={3} strokeWidth={3} stroke="#00FF00" opacity={1} direction="y" />
        </Bar>
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default CandleStickChart;
