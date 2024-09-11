import React from "react";
import {
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export interface PieChartResponse {
  labels: string[];
  data: number[];
}

interface ChartProps {
  rawData: PieChartResponse | null;  // Allow rawData to be null
}

const SimplePieChart: React.FC<ChartProps> = ({ rawData }) => {
  // Handle the case where rawData might be null or undefined
  if (!rawData || !rawData.labels || !rawData.data) {

    return <p>No data currently available for this pie chart</p>;
  }
  const { labels, data } = rawData;

  // Translate rawData into chartData
  const chartData = labels.map((label, index) => ({
    label,
    value: data[index] || 0,  // Default to 0 if data[index] is undefined
  }));
  return (
    <ResponsiveContainer width="100%" height={400}>
        <PieChart width={730} height={250}>
        <Pie data={chartData} dataKey="value" nameKey="labels" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
        <Pie data={chartData} dataKey="value" nameKey="labels" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label={({ label }) => label } />
        </PieChart>
    </ResponsiveContainer>
  );
};

export default SimplePieChart;
