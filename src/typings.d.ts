type MovieEntity = {
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
  runtime: number;
  genres: string[];
};

type Movies = {
  data: MovieEntity[];
  total: number;
  offset: number;
  limit: number;
};

// Actions

type MovieActionStart = {
  type: 'FETCH_MOVIES_START' | 'FETCH_MOVIE_START';
};

type MovieActionFailure = {
  type: 'FETCH_MOVIES_FAILURE' | 'FETCH_MOVIE_FAILURE';
  payload: {
    error: any;
  };
};

type MoviesActionSuccess = {
  type: 'FETCH_MOVIES_SUCCESS';
  payload: {
    result: Movies;
  };
};

type MovieActionSuccess = {
  type: 'FETCH_MOVIE_SUCCESS';
  payload: {
    result: MovieEntity;
  };
};

type QueryUpdateAction = {
  type: 'QUERY_UPDATE';
  payload: {
    query: string;
  };
};

type SearchUpdateAction = {
  type: 'SEARCH_BY_UPDATE';
  payload: {
    searchBy: string;
  };
};

type SortUpdateAction = {
  type: 'SORT_BY_UPDATE';
  payload: {
    sortBy: string;
  };
};

type MoviesAction = MovieActionStart | MoviesActionSuccess | MovieActionFailure;
type MovieAction = MovieActionStart | MovieActionSuccess | MovieActionFailure;
type SearchAction = QueryUpdateAction | SearchUpdateAction | SortUpdateAction;

// States

type MoviesState = {
  isFetching: boolean;
  total: number;
  movies: MovieEntity[];
  error: string | boolean;
  page: number;
  totalPages: number;
};

type MovieState = {
  isFetching: boolean;
  movie: MovieEntity;
  error: string | boolean;
};

type SearchState = {
  query: string;
  searchBy: string;
  sortBy: string;
  limit: number;
  sortOrder: 'desc' | 'asc';
};

export {
  Movies,
  MovieEntity,
  MovieAction,
  MovieActionStart,
  MovieActionSuccess,
  MoviesActionSuccess,
  MovieActionFailure,
  MoviesAction,
  QueryUpdateAction,
  SearchUpdateAction,
  SortUpdateAction,
  SearchAction,
  MovieState,
  MoviesState,
  SearchState,
};
