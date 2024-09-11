import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export interface BarChartResponse {
  labels: string[];
  data: number[];
}

interface ChartProps {
  rawData: BarChartResponse | null;  // Allow rawData to be null
}

const SimpleBarChart: React.FC<ChartProps> = ({ rawData }) => {
  // Handle the case where rawData might be null or undefined
  if (!rawData || !rawData.labels || !rawData.data) {
    return <p>No data currently available for this bar chart</p>;
  }
  const { labels, data } = rawData;

  // Translate rawData into chartData
  const chartData = labels.map((label, index) => ({
    label,
    value: data[index] || 0,  // Default to 0 if data[index] is undefined
  }));
  return (
    <ResponsiveContainer width="100%" height={400}>
        <BarChart width={730} height={250} data={chartData}>
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#82ca9d" />
        </BarChart>
    </ResponsiveContainer>
  );
};

export default SimpleBarChart;
