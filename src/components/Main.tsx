import React from 'react';
import SearchBarContainer from '../containers/SearchBarContainer';
import ResultBar from './ResultBar';

import Container from '@material-ui/core/Container';
import MoviesList from './MoviesList';
import { MoviesState } from '../typings';
import SearchByContainer from '../containers/SearchByContainer';
import SortByContainer from '../containers/SortByContainer';
import { Grid, createStyles, Theme, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    controls: {
      display: 'flex',
      alignItems: 'space-between',
      flexWrap: 'wrap',
      marginTop: 20,
    },
    control: {
      width: '49%',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
  }),
);

function Main({ moviesState }: { moviesState: MoviesState }) {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <SearchBarContainer />
      <div className={classes.controls}>
        <Grid
          container
          spacing={0}
          className={classes.control}
          alignItems="center"
        >
          <SearchByContainer />
        </Grid>
        <Grid
          container
          spacing={0}
          className={classes.control}
          alignItems="center"
          justify="flex-end"
        >
          <SortByContainer />
        </Grid>
      </div>
      <ResultBar total={moviesState.total} />
      <MoviesList movies={moviesState.movies} />
    </Container>
  );
}

export default Main;
