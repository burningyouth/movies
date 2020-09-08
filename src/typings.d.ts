import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { rootReducer } from './reducers';

export type MovieEntity = {
  id: number;
  title: string;
  tagline: string;
  vote_count: number;
  vote_average: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  runtime: number | null;
  genres: string[];
  budgetString?: string;
  revenueString?: string;
};

export type Movies = {
  data: MovieEntity[];
  total: number;
  offset: number;
  limit: number;
};

export type SortOptions = {
  id: string;
  title: string;
  vote_count: string;
  vote_average: string;
  release_date: string;
  budget: string;
  revenue: string;
};

export type SortOrder = {
  desc: string;
  asc: string;
};

export type SearchBy = 'title' | 'genres';

// Actions

export type MovieActionStart = {
  type: 'FETCH_MOVIES_START' | 'FETCH_MOVIE_START';
};

export type MovieActionFailure = {
  type: 'FETCH_MOVIES_FAILURE' | 'FETCH_MOVIE_FAILURE';
  payload: {
    error: string | boolean;
  };
};

export type MoviesActionSuccess = {
  type: 'FETCH_MOVIES_SUCCESS';
  payload: {
    result: Movies;
  };
};

export type MovieActionSuccess = {
  type: 'FETCH_MOVIE_SUCCESS';
  payload: {
    result: MovieEntity;
  };
};

export type QueryUpdateAction = {
  type: 'QUERY_UPDATE';
  payload: {
    query: string;
  };
};

export type SearchUpdateAction = {
  type: 'SEARCH_BY_UPDATE';
  payload: {
    searchBy: SearchBy;
  };
};

export type SortUpdateAction = {
  type: 'SORT_BY_UPDATE';
  payload: {
    sortBy: keyof SortOptions;
  };
};

export type SortOptionsUpdateAction = {
  type: 'SORT_OPTIONS_UPDATE';
  payload: {
    sortOptions: SortOptions;
  };
};

export type SortOrderUpdateAction = {
  type: 'SORT_ORDER_UPDATE';
  payload: {
    sortOrder: keyof SortOrder;
  };
};

export type MoviesAction =
  | MovieActionStart
  | MoviesActionSuccess
  | MovieActionFailure;
export type MovieAction =
  | MovieActionStart
  | MovieActionSuccess
  | MovieActionFailure;
export type SearchAction =
  | QueryUpdateAction
  | SearchUpdateAction
  | SortUpdateAction
  | SortOptionsUpdateAction
  | SortOrderUpdateAction;

// States

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type MoviesState = {
  isFetching: boolean;
  error: string | boolean;
  total: number;
  data: MovieEntity[];
  page: number;
  totalPages: number;
};

export type MovieState = Pick<MoviesState, 'isFetching' | 'error'> & {
  data: MovieEntity;
};

export type SearchState = {
  query: string;
  searchBy: SearchBy;
  sortOptions: SortOptions;
  sortBy: keyof SortOptions;
  sortOrder: keyof SortOrder;
};

// Props

export type HandleQuery = (query: string) => QueryUpdateAction;
export type HandleSearchBy = (searchBy: SearchBy) => SearchUpdateAction;
export type HandleSortBy = (sortBy: keyof SortOptions) => SortUpdateAction;
export type HandleSortOrder = (
  sortOrder: keyof SortOrder,
) => SortOrderUpdateAction;

export type DefaultProps = {
  readonly children?: React.ReactNode;
};

export type DetailProps = DefaultProps & {
  readonly movie: MovieEntity;
  readonly handleQuery: HandleQuery;
};

export type MainProps = DefaultProps & {
  readonly movies: MovieEntity[];
  readonly total: number;
};

export type SearchBarProps = DefaultProps & {
  readonly query: string;
  readonly handleQuery: HandleQuery;
};

export type SortByProps = DefaultProps & {
  readonly sortBy: keyof SortOptions;
  readonly sortOptions: SortOptions;
  readonly sortOrder: keyof SortOrder;
  readonly handleSortBy: HandleSortBy;
  readonly handleSortOrder: HandleSortOrder;
};

export type SearchByProps = DefaultProps & {
  readonly searchBy: SearchBy;
  readonly handleSearchBy: HandleSearchBy;
};

export type SortSelectProps = DefaultProps & {
  readonly items: SortOrder | SortOptions;
  readonly label: string;
  readonly value: string;
  readonly handleValue: (
    value: any,
  ) => SortUpdateAction | SortOrderUpdateAction;
};

export type LoadMoreButtonProps = DefaultProps & {
  readonly handleClick: () => ThunkAction;
};

export type ErrorProps = DefaultProps & {
  readonly message: string | boolean;
};
