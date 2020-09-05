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
} from '../typings';

function queryUpdate(query = ''): QueryUpdateAction {
  return {
    type: ActionTypes.QUERY_UPDATE,
    payload: {
      query,
    },
  };
}

function sortByUpdate(sortBy: keyof SortOptions): SortUpdateAction {
  return {
    type: ActionTypes.SORT_BY_UPDATE,
    payload: {
      sortBy,
    },
  };
}

function sortOptionsUpdate(sortOptions: SortOptions): SortOptionsUpdateAction {
  return {
    type: ActionTypes.SORT_OPTIONS_UPDATE,
    payload: {
      sortOptions,
    },
  };
}

function sortOrderUpdate(
  sortOrder: 'desc' | 'asc' = 'desc',
): SortOrderUpdateAction {
  return {
    type: ActionTypes.SORT_ORDER_UPDATE,
    payload: {
      sortOrder,
    },
  };
}

function searchByUpdate(searchBy = ''): SearchUpdateAction {
  return {
    type: ActionTypes.SEARCH_BY_UPDATE,
    payload: {
      searchBy,
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

    const searchInfo = getState().searchInfo;
    const query = searchInfo.query,
      sortBy = searchInfo.sortBy,
      searchBy = searchInfo.searchBy,
      sortOrder = searchInfo.sortOrder,
      limit = searchInfo.limit;
    const pageParams = `&offset=${
      (page - 1) * limit + (page - 1)
    }&limit=${limit}`;
    const fetchUrl = query
      ? `https://reactjs-cdp.herokuapp.com/movies?search=${query}&sortOrder=${sortOrder}&searchBy=${searchBy}&sortBy=${sortBy}${pageParams}`
      : `https://reactjs-cdp.herokuapp.com/movies?searchBy=${searchBy}&sortOrder=${sortOrder}&sortBy=${sortBy}${pageParams}`;

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

export {
  fetchMovies,
  fetchMovie,
  queryUpdate,
  sortByUpdate,
  searchByUpdate,
  sortOptionsUpdate,
  sortOrderUpdate,
};
