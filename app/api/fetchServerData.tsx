import axios from 'axios';

export interface ChartData {
  labels: string[]
  data: number[]
}

export interface CandleData {
    x: string;  // Date
    open: number;
    high: number;
    low: number;
    close: number;
}  


const fetchData = async (chartType: string): Promise<ChartData | null> => {
  try {
    const response = await axios.get<ChartData>(`http://127.0.0.1:8000/oa/api${chartType}`);
    const data = response.data
    return data
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export default fetchData;