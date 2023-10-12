import { filterObjects, getGenreNames } from './utils';

const BASE_URL = 'https://api.themoviedb.org/3';

const GET = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.TMDB_API_ACCESS_TOKEN}`,
  },
};

export { getConfig, getMovies, getMovieById, getTrends, searchMovies };

// Get TMDB API configurations
async function getConfig() {
  const url = `${BASE_URL}/configuration`;
  const options = GET;

  const res = await fetch(url, options);
  const data = await res.json();

  return data;
}

async function getGenres(type) {
  const url = `${BASE_URL}/genre/${type}/list?language=en`;
  const options = GET;

  const res = await fetch(url, options);
  const data = await res.json();

  return data;
}

async function getTrends() {}

// Get movies from TMDB API
async function getMovies(type) {
  const url = `${BASE_URL}/movie/${type}?language=en-US&page=1`;
  const options = GET;

  const res = await fetch(url, options);
  const data = await res.json();

  const genres = await getGenres('movie');

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
    title: data.title,
    release_date: data.release_date,
    runtime: data.runtime,
    genres: data.genres,
    vote_average: data.vote_average,
    vote_count: data.vote_count,
    overview: data.overview,
    poster_path: data.poster_path,
    trailer: `https://www.youtube.com/embed/${
      filterObjects(data.videos.results, 'type', 'Trailer')[0].key
    }`,
    credits: {
      director: filterObjects(data.credits.crew, 'job', 'Director')[0].name,
      writers: filterObjects(data.credits.crew, 'department', 'Writing').map(
        (person) => person.name
      ),
      cast: data.credits.cast.slice(0, 5).map((person) => person.name),
    },
  };

  // console.log(formattedResults);
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
