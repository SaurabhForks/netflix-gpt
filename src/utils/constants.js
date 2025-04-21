const TMDB_ACCESS_TOCKEN = import.meta.env.VITE_TMDB_ACCESS_TOCKEN;

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMDB_ACCESS_TOCKEN}`,
  },
};

export const BASE_TMDB_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const getMovieVideoUrl = (id) =>
  `https://api.themoviedb.org/3/movie/${id}/videos`;

export const getMoviePostarUrl = (poster_path) =>
  `https://image.tmdb.org/t/p/w500/${poster_path}`;

export const PAGES = [
  { name: "Home", route: "/" },
  { name: "Gpt Search", route: "gpt-search" },
  { name: "Blog", route: "blog" },
];
