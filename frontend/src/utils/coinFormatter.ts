import { coinDataType, oneCoinType } from 'features/coinGeckoApi/coinPage/types';

const coinFormatter = (coinData: coinDataType, defCurr: string): oneCoinType => {
  return {
    rank: coinData.market_cap_rank,
    name: coinData.name,
    image: coinData.image.large || '',
    currPrice: coinData.market_data.current_price[defCurr.toLocaleLowerCase()],
    marketCap: coinData.market_data.market_cap[defCurr.toLocaleLowerCase()],
    title: 'Description of the cryptocurrency',
    description: coinData.description['en'],
    id: coinData.id
  };
};

export { coinFormatter };
