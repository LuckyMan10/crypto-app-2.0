import { ChartDataType } from './types';

const fetchChartData = async (): Promise<ChartDataType> => {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=RUB&days=365'
  );
  const resJson = await res.json();
  const { prices } = resJson;
  const chartPrices = prices.map((coin: number[]): { date: string; price: number } => {
    const date = new Date(coin[0]);
    const fullDate = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
    return { date: fullDate, price: coin[1] };
  });
  return chartPrices;
};

export { fetchChartData };
