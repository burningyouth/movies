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

interface MoviePayload {
  movies?: MoviesInterface;
  genres: Array<GenreInterface>;
  page?: number;
  query?: string;
}

interface Action {
  type: string;
  payload: MoviePayload | Error;
  error: boolean;
}

export {
  MovieInterface,
  MoviesInterface,
  Action,
  MoviePayload,
  GenreInterface,
};
