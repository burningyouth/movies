import * as ActionTypes from './actionTypes';
import {
  MovieActionStart,
  MovieActionSuccess,
  MovieActionFailure,
  MoviesActionSuccess,
  Movies,
  MovieEntity,
} from '../typings';

function queryUpdate(query: string = '') {
  return {
    type: ActionTypes.QUERY_UPDATE,
    payload: {
      query,
    },
  };
}

function fetchMoviesStart(): MovieActionStart {
  return {
    type: ActionTypes.FETCH_MOVIES_START,
  };
}

function fetchMovieStart(): MovieActionStart {
  return {
    type: ActionTypes.FETCH_MOVIE_START,
  };
}

function fetchMoviesSuccess(result: Movies): MoviesActionSuccess {
  return {
    type: ActionTypes.FETCH_MOVIES_SUCCESS,
    payload: {
      result,
    },
  };
}

function fetchMovieSuccess(result: MovieEntity): MovieActionSuccess {
  return {
    type: ActionTypes.FETCH_MOVIE_SUCCESS,
    payload: {
      result,
    },
  };
}

function fetchMoviesFailure(error: string): MovieActionFailure {
  return {
    type: ActionTypes.FETCH_MOVIES_FAILURE,
    payload: {
      error: new Error(error),
    },
  };
}

function fetchMovieFailure(error: string): MovieActionFailure {
  return {
    type: ActionTypes.FETCH_MOVIE_FAILURE,
    payload: {
      error: new Error(error),
    },
  };
}

function fetchMovies(page: number = 1) {
  return function (dispatch: any, getState: any) {
    dispatch(fetchMoviesStart());

    const pageParams = `&offset=${(page - 1) * 9}&limit=9`;
    const query = getState().searchInfo.query,
      sortBy = getState().searchInfo.sortBy,
      searchBy = getState().searchInfo.searchBy;
    const fetchUrl = query
      ? `https://reactjs-cdp.herokuapp.com/movies?search=${query}&searchBy=${searchBy}&sortBy=${sortBy}${pageParams}`
      : `https://reactjs-cdp.herokuapp.com/movies?searchBy=${searchBy}&sortBy=${sortBy}${pageParams}`;
    console.log(fetchUrl);
    return fetch(fetchUrl)
      .then(
        (response) => response.json(),
        (error) => {
          dispatch(fetchMoviesFailure(error));
        },
      )
      .then((response) => {
        dispatch(fetchMoviesSuccess(response));
      });
  };
}

function fetchMovie(id: number) {
  return function (dispatch: any) {
    dispatch(fetchMovieStart());

    const fetchUrl = `https://reactjs-cdp.herokuapp.com/movies/${id}`;
    return fetch(fetchUrl)
      .then(
        (response) => response.json(),
        (error) => {
          dispatch(fetchMovieFailure(error));
        },
      )
      .then((response) => {
        dispatch(fetchMovieSuccess(response));
      });
  };
}

// function fetchGenres() {
//   return function (dispatch: Function) {
//     const apiKey = '91c9490dd0cbb25acb7c4e34b9da2471';
//     const fetchUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;
//     return fetch(fetchUrl)
//       .then(
//         (response) => response.json(),
//         (error) => dispatch(failFetchingGenres(error)),
//       )
//       .then((json) => dispatch(receiveGenres(json)));
//   };
// }

export { fetchMovies, fetchMovie, queryUpdate };
