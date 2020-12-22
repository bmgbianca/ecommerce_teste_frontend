import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:8080/',
  headers: {
    'Content-type': 'application/json',
  },
});

const getProducts = (limit, page, query) => {
  let params = {};
  if (query) {
    params = {
      search: query,
    };
  }
  return http.request({
    method: 'get',
    url: `/${limit}/${page}`,
    params: params,
  });
};

export { getProducts };
