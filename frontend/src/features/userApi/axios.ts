import axios from 'axios';

function userApi() {
  const token = localStorage.getItem('accessToken');
  const headers = {
    api_key: '1f518b6c-60d5-11ec-8607-0242ac130002',
    authorization: ''
  };
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  return axios.create({
    baseURL: 'http://localhost:5000/api/user',
    withCredentials: true,
    headers
  });
}

export { userApi };
