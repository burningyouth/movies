import { combineReducers } from 'redux';
import * as ActionTypes from '../actions/actionTypes';
import {
  MovieAction,
  MoviesState,
  QueryUpdateAction,
  MovieState,
  MoviesAction,
  SearchAction,
  SearchState,
} from '../typings';

const initialMoviesState = {
  isFetching: false,
  total: 0,
  page: 0,
  totalPages: 0,
  movies: [],
  error: false,
} as MoviesState;

const initialMovieState = {
  isFetching: false,
  error: false,
  movie: {},
} as MovieState;

const initialSearchState = {
  query: '',
  sortBy: 'release_date',
  searchBy: 'title',
} as SearchState;

const movies = (
  state = initialMoviesState,
  action: MoviesAction,
): MoviesState => {
  switch (action.type) {
    case ActionTypes.FETCH_MOVIES_START:
      return { ...state, isFetching: true };
    case ActionTypes.FETCH_MOVIES_SUCCESS:
      let newItems = action.payload.result.data;
      if (action.payload.result.offset > 1) {
        newItems = state.movies.concat(action.payload.result.data);
      }
      return {
        ...state,
        isFetching: false,
        total: action.payload.result.total,
        page: Math.ceil((action.payload.result.offset + 1) / 9),
        totalPages: Math.ceil(action.payload.result.total / 9),
        movies: newItems,
      };
    case ActionTypes.FETCH_MOVIES_FAILURE:
      return { ...state, isFetching: false, error: action.payload.error };
    default:
      return state;
  }
};

const movieDetail = (
  state = initialMovieState,
  action: MovieAction,
): MovieState => {
  switch (action.type) {
    case ActionTypes.FETCH_MOVIE_START:
      return { ...state, isFetching: true };
    case ActionTypes.FETCH_MOVIE_SUCCESS:
      const movie = action.payload.result;
      return {
        ...state,
        isFetching: false,
        movie: { ...movie },
      };
    case ActionTypes.FETCH_MOVIE_FAILURE:
      return { ...state, isFetching: false, error: action.payload.error };
    default:
      return state;
  }
};

const searchInfo = (
  state = initialSearchState,
  action: SearchAction,
): SearchState => {
  switch (action.type) {
    case ActionTypes.QUERY_UPDATE:
      return {
        ...state,
        query: action.payload.query,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  movies,
  searchInfo,
  movieDetail,
});

export default rootReducer;
