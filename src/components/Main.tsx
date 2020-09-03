import React from 'react';
import SearchBar from './SearchBar';
import ResultBar from './ResultBar';

import Container from '@material-ui/core/Container';
import MoviesList from './MoviesList';

function Header() {
  const movies = {
    total: 200,
    items: [
      {
        id: 1,
        popularity: 100,
        rating: 8,
        posterImage: 'https://picsum.photos/seed/picsum/200/300',
        language: 'en',
        title: 'Title 1',
        genres: ['action', 'rpg'],
        overview:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        date: '2020-10-02',
        adult: true,
      },
      {
        id: 2,
        popularity: 100,
        rating: 8,
        language: 'en',
        title: 'Title 1',
        genres: ['action', 'rpg'],
        overview:
          'Lorem ipsum dolor sit amet, magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        date: '2020-10-02',
        adult: false,
      },
      {
        id: 3,
        popularity: 100,
        rating: 8,
        posterImage: 'https://picsum.photos/seed/picsum/200/300',
        language: 'en',
        title: 'Title 1',
        genres: ['action', 'rpg'],
        overview:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        date: '2020-10-02',
        adult: false,
      },
      {
        id: 4,
        popularity: 100,
        rating: 8,
        posterImage: 'https://picsum.photos/seed/picsum/200/300',
        language: 'en',
        title: 'Title 1',
        genres: ['action', 'rpg'],
        overview:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        date: '2020-10-02',
        adult: false,
      },
    ],
  };
  return (
    <Container maxWidth="lg">
      <SearchBar />
      <ResultBar total={movies.total} />
      <MoviesList movies={movies.items} />
    </Container>
  );
}

export default Header;
