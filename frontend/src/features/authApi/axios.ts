import axios from 'axios';

const authApi = axios.create({
  baseURL: 'http://localhost:5000/api/auth',
  withCredentials: true,
  headers: {
    api_key: '1f518b6c-60d5-11ec-8607-0242ac130002'
  }
});

export { authApi };
