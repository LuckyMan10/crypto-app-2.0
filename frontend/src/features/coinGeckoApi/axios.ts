import axios from 'axios';

const coinGeckoApi = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3/coins'
});
const coinGecko = 'https://api.coingecko.com/api/v3/coins';

export { coinGeckoApi, coinGecko };
