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

interface MoviesInterface {
  total: number;
  items: Array<Movie>;
}

export { MovieInterface, MoviesInterface };
