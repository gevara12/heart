import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-type': 'application/json',
  },
});

export default http;

http.defaults.headers.common = {
  Authorization: `Bearer ${typeof window !== 'undefined' && sessionStorage.getItem('accessToken')}`,
};
