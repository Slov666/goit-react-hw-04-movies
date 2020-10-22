import axios from 'axios';
const API_KEY = '63d122e3b632809e0cfe32a67cf38784';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchTrendsFilms = period => {
  return axios
    .get(`${BASE_URL}/trending/all/${period}?api_key=${API_KEY}`)
    .then(response => response.data.results);
};
const fetchDetailsFilms = id => {
  return axios
    .get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data);
};
const fetchSearchFilms = query => {
  return axios
    .get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
    )
    .then(response => response.data.results);
};
const fetchCatsFilms = movieId => {
  return axios
    .get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
    .then(response => response.data);
};
const fetchReviewsFilms = movieId => {
  return axios
    .get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
    .then(response => response.data.results);
};

export default {
  fetchTrendsFilms,
  fetchDetailsFilms,
  fetchSearchFilms,
  fetchCatsFilms,
  fetchReviewsFilms
};
