import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Movie from './Movie';
import { MovieInterface } from '../typings';

const useStyles = makeStyles({
  root: {
    marginTop: 40,
  },
});

function MoviesList({ movies }: { movies: Array<MovieInterface> }) {
  const movieComponents = movies.map((movie) => {
    return <Movie movie={movie} key={movie.id} />;
  });
  const { root } = useStyles();
  return (
    <Grid container spacing={3} className={root}>
      {movieComponents}
    </Grid>
  );
}

export default MoviesList;
