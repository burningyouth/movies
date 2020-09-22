import * as ActionTypes from './actionTypes';
import {
  QueryUpdateAction,
  MovieActionStart,
  MovieActionSuccess,
  MovieActionFailure,
  MoviesActionSuccess,
  Movies,
  MovieEntity,
  SortUpdateAction,
  SearchUpdateAction,
  SortOptionsUpdateAction,
  SortOrderUpdateAction,
  SortOptions,
  AppThunk,
  SortOrder,
  SearchBy,
} from '../typings';

export const queryUpdate = (query = ''): QueryUpdateAction => {
  return {
    type: ActionTypes.QUERY_UPDATE,
    payload: {
      query,
    },
  };
};

export const sortByUpdate = (sortBy: keyof SortOptions): SortUpdateAction => {
  return {
    type: ActionTypes.SORT_BY_UPDATE,
    payload: {
      sortBy,
    },
  };
};

export const sortOptionsUpdate = (
  sortOptions: SortOptions,
): SortOptionsUpdateAction => {
  return {
    type: ActionTypes.SORT_OPTIONS_UPDATE,
    payload: {
      sortOptions,
    },
  };
};

export const sortOrderUpdate = (
  sortOrder: keyof SortOrder = 'desc',
): SortOrderUpdateAction => {
  return {
    type: ActionTypes.SORT_ORDER_UPDATE,
    payload: {
      sortOrder,
    },
  };
};

export const searchByUpdate = (
  searchBy: SearchBy = 'title',
): SearchUpdateAction => {
  return {
    type: ActionTypes.SEARCH_BY_UPDATE,
    payload: {
      searchBy,
    },
  };
};

export const fetchMoviesStart = (): MovieActionStart => {
  return {
    type: ActionTypes.FETCH_MOVIES_START,
  };
};

export const fetchMovieStart = (): MovieActionStart => {
  return {
    type: ActionTypes.FETCH_MOVIE_START,
  };
};

export const fetchMoviesSuccess = (result: Movies): MoviesActionSuccess => {
  return {
    type: ActionTypes.FETCH_MOVIES_SUCCESS,
    payload: {
      result,
    },
  };
};

export const fetchMovieSuccess = (result: MovieEntity): MovieActionSuccess => {
  return {
    type: ActionTypes.FETCH_MOVIE_SUCCESS,
    payload: {
      result,
    },
  };
};

export const fetchMoviesFailure = (error: string): MovieActionFailure => {
  return {
    type: ActionTypes.FETCH_MOVIES_FAILURE,
    payload: {
      error,
    },
  };
};

export const fetchMovieFailure = (error: string): MovieActionFailure => {
  return {
    type: ActionTypes.FETCH_MOVIE_FAILURE,
    payload: {
      error,
    },
  };
};

export const fetchMovies = (page: number = 1): AppThunk => {
  return function (dispatch, getState) {
    dispatch(fetchMoviesStart());

    const { query, sortBy, searchBy, sortOrder } = getState().searchInfo;
    const pageParams = `&offset=${(page - 1) * 9}&limit=${9}`;
    const fetchUrl = query
      ? `https://reactjs-cdp.herokuapp.com/movies?search=${query}&sortOrder=${sortOrder}&searchBy=${searchBy}&sortBy=${sortBy}${pageParams}`
      : `https://reactjs-cdp.herokuapp.com/movies?searchBy=${searchBy}&sortOrder=${sortOrder}&sortBy=${sortBy}${pageParams}`;

    return fetch(fetchUrl)
      .then((response) => response.json())
      .then(
        (response) => {
          dispatch(fetchMoviesSuccess(response));
        },
        (error) => {
          dispatch(fetchMoviesFailure(error));
        },
      );
  };
};

export const fetchMovie = (id: number): AppThunk => {
  return function (dispatch, getState) {
    if (!id) return dispatch(fetchMovieFailure('ID not specified!'));
    if (getState().movieDetail.data.id === id) return false;

    dispatch(fetchMovieStart());

    const movie = getState().movies.data.find((item: MovieEntity) => {
      if (id === item.id) return true;
      return false;
    });
    if (movie) return dispatch(fetchMovieSuccess(movie));

    const fetchUrl = `https://reactjs-cdp.herokuapp.com/movies/${id}`;
    return fetch(fetchUrl)
      .then((response) => response.json())
      .then(
        (response) => {
          dispatch(fetchMovieSuccess(response));
        },
        (error) => {
          dispatch(fetchMovieFailure(error));
        },
      );
  };
};
