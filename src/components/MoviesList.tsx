import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { Movie } from './Movie';
import { MovieEntity } from '../typings';
import { LoadMoreButtonContainer } from '../containers/LoadMoreButtonContainer';

const useStyles = makeStyles({
  root: {
    marginTop: 40,
  },
});

export const MoviesList = ({ movies }: { movies: Array<MovieEntity> }) => {
  const { root } = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={3} className={root}>
        {movies.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </Grid>
      <LoadMoreButtonContainer />
    </React.Fragment>
  );
};
