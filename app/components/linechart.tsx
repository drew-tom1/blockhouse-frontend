import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export interface LineChartResponse {
  labels: string[];
  data: number[];
}

interface ChartProps {
  rawData: LineChartResponse | null;  // Allow rawData to be null
}

const SimpleLineChart: React.FC<ChartProps> = ({ rawData }) => {
  // Handle the case where rawData might be null or undefined
  if (!rawData || !rawData.labels || !rawData.data) {
    return <p>No data currently available for this line chart</p>;  
  }
  const { labels, data } = rawData;

  // Translate rawData into chartData
  const chartData = labels.map((label, index) => ({
    label,
    value: data[index] || 0,  // Default to 0 if data[index] is undefined
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        width={500}
        height={300}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SimpleLineChart;
