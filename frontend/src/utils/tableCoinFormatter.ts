import { coinDataType, coinType } from 'features/coinGeckoApi/homePage/types';

const tableCoinFormatter = (coinData: coinDataType[], defCurr: string): coinType[] => {
  const filtredData = coinData.map((el) => {
    return {
      coin: el.name,
      image: el.image,
      id: el.id,
      change: `${el.market_cap_change_percentage_24h} %`,
      cap: `${el.market_cap} ${defCurr}`,
      key: `key_${el.id}`,
      price: `${el.current_price} ${defCurr}`
    };
  });
  return filtredData;
};

export { tableCoinFormatter };
