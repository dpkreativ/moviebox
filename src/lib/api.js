import { findTrailerKey, getGenreNames } from './utils';

const BASE_URL = 'https://api.themoviedb.org/3';

const GET = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.TMDB_API_ACCESS_TOKEN}`,
  },
};

export { getConfig, getTopMovies, getMovieById, searchMovies };

// Get TMDB API configurations
async function getConfig() {
  const url = `${BASE_URL}/configuration`;
  const options = GET;

  const res = await fetch(url, options);
  const data = await res.json();

  return data;
}

async function getMovieGenres() {
  const url = `${BASE_URL}/genre/movie/list?language=en`;
  const options = GET;

  const res = await fetch(url, options);
  const data = await res.json();

  return data;
}

// Get top-rated movies from TMDB API
async function getTopMovies() {
  const url = `${BASE_URL}/movie/popular?language=en-US&page=1`;
  const options = GET;

  const res = await fetch(url, options);
  const data = await res.json();

  const genres = await getMovieGenres();

  const formattedResults = data.results.map((result) => {
    return {
      ...result,
      genre_names: getGenreNames(result.genre_ids, genres),
    };
  });

  return formattedResults;
}

// Get movie by id
async function getMovieById(movie_id) {
  const url = `${BASE_URL}/movie/${movie_id}?language=en-US&append_to_response=videos,credits`;
  const options = GET;

  const res = await fetch(url, options);
  const data = await res.json();

  const formattedResults = {
    // ...data,
    title: data.title,
    release_date: data.release_date,
    runtime: data.runtime,
    genres: data.genres,
    vote_average: data.vote_average,
    vote_count: data.vote_count,
    overview: data.overview,
    poster_path: data.poster_path,
    trailer: `https://www.youtube.com/embed/${findTrailerKey(
      data.videos.results
    )}`,
    credits: data.credits,
  };

  console.log(formattedResults);

  return formattedResults;
}

// Search movies
async function searchMovies(query) {
  const url = `${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
  const options = GET;

  const res = await fetch(url, options);
  const data = await res.json();

  return data;
}
