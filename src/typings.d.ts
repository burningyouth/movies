interface MovieInterface {
  id: number;
  popularity: number;
  rating: number;
  posterImage?: string;
  language: string;
  title: string;
  genres: Array<string>;
  overview?: string;
  date: string;
  adult: boolean;
}

interface GenreInterface {
  id: number;
  name: string;
}

interface MoviesInterface {
  total: number;
  items: Array<Movie>;
}

interface FetchAction {
  type: string;
  status: string;
  query?: string;
  page?: number;
  error?: string;
}

interface ReceiveAction {
  type: string;
  movies?: MoviesInterface;
  genres?: Array<GenreInterface>;
}

interface QueryUpdateAction {
  type: string;
  query: string;
}

export {
  MovieInterface,
  MoviesInterface,
  FetchAction,
  ReceiveAction,
  GenreInterface,
  QueryUpdateAction,
};
