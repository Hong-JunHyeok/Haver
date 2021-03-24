import axios, { AxiosInstance } from 'axios';
import { SERVER, API_KEY } from 'config/config.json';

export const customAxios: AxiosInstance = axios.create({
  baseURL: SERVER,
  headers: {
    KakaoAK: API_KEY,
  },
});
