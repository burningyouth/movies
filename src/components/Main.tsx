import React from 'react';
import SearchBarContainer from '../containers/SearchBarContainer';
import ResultBar from './ResultBar';

import Container from '@material-ui/core/Container';
import MoviesList from './MoviesList';
import { MoviesState } from '../typings';

function Main({ moviesState }: { moviesState: MoviesState }) {
  return (
    <Container maxWidth="lg">
      <SearchBarContainer />
      <ResultBar total={moviesState.total} />
      <MoviesList movies={moviesState.movies} />
    </Container>
  );
}

export default Main;
