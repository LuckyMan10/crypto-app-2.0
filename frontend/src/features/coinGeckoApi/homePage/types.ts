export type initState = {
  trendingCoins: Array<coinDataType>;
  coinsList: Array<coinType>;
  filtredCoinsList: Array<coinType>;
  isTrendingCoinsLoading: boolean;
  isTrendingCoinsError: boolean;
  isCoinsListLoading: boolean;
  isCoinsListError: boolean;
  currentPage: number;
  allPages: number;
  coinsStart: number;
  coinsEnd: number;
  isFiltred: boolean;
  searchValue: string;
  defaultCurrency: string;
};

export type coinType = {
  coin: string;
  image: string;
  id: string;
  change: number | string;
  cap: number | string;
  key: string;
  price: string;
};

export type coinDataType = {
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  circulating_supply: number;
  current_price: number;
  fully_diluted_valuation?: number;
  high_24h: number;
  id: string;
  image: string;
  last_updated: string;
  low_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  max_supply?: number;
  name: string;
  price_change_24h: number;
  price_change_percentage_24h: number;
  roi?: {
    currency: string;
    percentage: number;
    times: number;
  };
  symbol: string;
  total_supply?: number;
  total_volume?: number;
};
