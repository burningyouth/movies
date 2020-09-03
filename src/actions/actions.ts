import * as ActionTypes from './actionTypes';

function requestMovies(query: string, page: number) {
  return {
    type: ActionTypes.FETCH_MOVIES_REQUEST,
    payload: {
      page,
      query,
    },
  };
}

function successFetchingMovies() {
  return {
    type: ActionTypes.FETCH_MOVIES_SUCCESS,
  };
}

function failFetchingMovies(error: string) {
  return {
    type: ActionTypes.FETCH_MOVIES_ERROR,
    payload: new Error(error),
    error: true,
  };
}

function failFetchingGenres(error: string) {
  return {
    type: ActionTypes.FETCH_GENRES_ERROR,
    payload: new Error(error),
    error: true,
  };
}

function receiveMovies(json: JSON) {
  return {
    type: ActionTypes.RECEIVE_MOVIES,
    payload: {
      movies: JSON.parse(JSON.stringify(json)),
    },
  };
}

function receiveGenres(json: JSON) {
  return {
    type: ActionTypes.RECEIVE_GENRES,
    payload: {
      genres: JSON.parse(JSON.stringify(json)),
    },
  };
}

function fetchMovies(query: string = '', page: number = 1) {
  return function (dispatch: Function) {
    dispatch(requestMovies(query, page));

    const apiKey = '91c9490dd0cbb25acb7c4e34b9da2471';
    const fetchUrl = query
      ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}&include_adult=true`
      : `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&page=${page}`;
    return fetch(fetchUrl)
      .then(
        (response) => {
          dispatch(successFetchingMovies());
          return response.json();
        },
        (error) => dispatch(failFetchingMovies(error)),
      )
      .then((json) => dispatch(receiveMovies(json)));
  };
}

function fetchGenres() {
  return function (dispatch: Function) {
    const apiKey = '91c9490dd0cbb25acb7c4e34b9da2471';
    const fetchUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;
    return fetch(fetchUrl)
      .then(
        (response) => response.json(),
        (error) => dispatch(failFetchingGenres(error)),
      )
      .then((json) => dispatch(receiveGenres(json)));
  };
}

export {
  requestMovies,
  successFetchingMovies,
  failFetchingMovies,
  receiveMovies,
  fetchMovies,
  fetchGenres,
};
