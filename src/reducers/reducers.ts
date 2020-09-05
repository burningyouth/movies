import { combineReducers } from 'redux';
import * as ActionTypes from '../actions/actionTypes';
import {
  MovieAction,
  MoviesState,
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
  limit: 9,
  sortBy: 'release_date',
  sortOptions: {
    id: 'ID',
    title: 'Title',
    vote_count: 'Total votes',
    vote_average: 'Rating',
    release_date: 'Release date',
    overview: 'Overview',
    budget: 'Budget',
  },
  sortOrder: 'desc',
  searchBy: 'title',
} as SearchState;

function formatMoney(
  amount: number | string,
  decimalCount = 0,
  decimal = '.',
  thousands = ',',
) {
  decimalCount = Math.abs(decimalCount);
  decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

  const negativeSign = amount < 0 ? '-' : '';

  let i = parseInt(
    (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)),
  ).toString();
  let j = i.length > 3 ? i.length % 3 : 0;

  return (
    negativeSign +
    (j ? i.substr(0, j) + thousands : '') +
    i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
    (decimalCount
      ? decimal +
        Math.abs(+amount - +i)
          .toFixed(decimalCount)
          .slice(2)
      : '')
  );
}

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
        page: Math.ceil(newItems.length / 9),
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
      const dateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      movie.release_date = new Date(movie.release_date).toLocaleDateString(
        'en-US',
        dateOptions,
      );
      movie.budgetString = formatMoney(movie.budget);
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
    case ActionTypes.SEARCH_BY_UPDATE:
      return {
        ...state,
        searchBy: action.payload.searchBy,
      };
    case ActionTypes.SORT_BY_UPDATE:
      return {
        ...state,
        sortBy: action.payload.sortBy,
      };
    case ActionTypes.SORT_OPTIONS_UPDATE:
      return {
        ...state,
        sortOptions: action.payload.sortOptions,
      };
    case ActionTypes.SORT_ORDER_UPDATE:
      return {
        ...state,
        sortOrder: action.payload.sortOrder,
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
