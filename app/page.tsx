"use client";

import React, { useState } from "react";
import fetchData, { ChartData } from "./api/fetchServerData";
import SimpleLineChart from "./components/linechart";
import SimplePieChart from "./components/piechart";
import SimpleBarChart from "./components/barchart";
import CandleStickChart from "./components/candles";

export default function Home() {
  const [lineData, setLineData] = useState<ChartData | null>(null);
  const [barData, setBarData] = useState<ChartData | null>(null);
  const [pieData, setPieData] = useState<ChartData | null>(null);
  const [candlestickData, setCandlestickData] = useState<ChartData | null>(null);

  const getLineData = async () => {
    const data = await fetchData('/line-chart-data/');
    setLineData(data);
  };
  const getPieData = async () => {
    const data = await fetchData('/pie-chart-data/');
    setPieData(data);
  };
  const getBarData = async () => {
    const data = await fetchData('/bar-chart-data/');
    setBarData(data);
  };
  const getCandlestickData = async () => {
    const data = await fetchData('/candlestick-data/');
    setCandlestickData(data);
  };
  
  const handleCharts = async () => {
    getPieData()
    getLineData()
    getBarData()
    getCandlestickData()
  }

  return (
    <main className="p-4">
      <div className="grid grid-cols-2 gap-5">
        <div className="relative col-span-4 border border-gray-500 rounded p-4">
          <h1 className="text-lg text-center">Basic Dashboard</h1>
          <p className="text-center">
            <button onClick={handleCharts} className="text-lg hover:scale-105 duration-300 border rounded p-2">
              Fetch Data
            </button>
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            <div className="col-span-1 border rounded p-4">
              <h1>Line Chart</h1>
              <SimpleLineChart rawData={lineData} />
            </div>
            <div className="col-span-1 border rounded p-4">
              <h1>Pie Chart</h1>
              <SimplePieChart rawData={pieData} />
            </div>
            <div className="col-span-1 border rounded p-4">
              <h1>Bar Chart</h1>
              <SimpleBarChart rawData={barData} />
            </div>
            <div className="col-span-1 border rounded p-4">
              <h1>Candlestick Chart</h1>
              <CandleStickChart rawData={candlestickData} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
