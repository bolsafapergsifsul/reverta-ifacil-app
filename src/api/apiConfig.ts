import axios from 'axios';

export const BASE_URL = 'http://172.26.112.1:3000';
export const api = axios.create({
  baseURL: BASE_URL,
});
