export type chartArgsType = {
  id: string;
  days: number;
  currency: string;
};
export type ChartDataType = Array<{ date: string; price: number }>;
export type coinDataType = {
  id: string;
  symbol: string;
  name: string;
  country_origin: string;
  genesis_date: string;
  block_time_in_minutes: number;
  market_cap_rank: number;
  coingecko_rank: number;
  coingecko_score: number;
  developer_score: number;
  community_score: number;
  liquidity_score: number;
  last_updated: string;
  categories: Array<string>;
  public_interest_score: number;
  description: {
    [key: string]: string;
  };
  localization: {
    [key: string]: string;
  };
  image: {
    thumb?: string;
    small?: string;
    large?: string;
  };
  market_data: {
    market_cap: {
      [key: string]: number;
    };
    current_price: {
      [key: string]: number;
    };
  };
};
export type oneCoinType = {
  rank: number;
  name: string;
  image: string;
  currPrice: number;
  marketCap: number;
  title: string;
  description: string;
  id: string;
};
export type initState = {
  chartData: ChartDataType;
  oneCoinData: oneCoinType[];
  isChartDataLoading: boolean;
  isChartDataError: boolean;
  isOneCoinLoading: boolean;
  isOneCoinError: boolean;
  defaultCurrency: string;
  days: number;
};
