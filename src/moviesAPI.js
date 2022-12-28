import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '39081659ccbd37aa67b527f3397a07ba';
// export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
const TRENGING_PATH = '/trending/movie/day';

export const getTrendingMovies = page => {
  return axios(TRENGING_PATH, {
    params: {
      api_key: API_KEY,
      page,
    },
  });
};
