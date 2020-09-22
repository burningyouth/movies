import React from 'react';

import Container from '@material-ui/core/Container';
import { Grid, createStyles, Theme, makeStyles } from '@material-ui/core';

import { SearchBarContainer } from '../containers/SearchBarContainer';
import { ResultBar } from './ResultBar';
import { MoviesList } from './MoviesList';
import { MainProps } from '../typings';
import { SearchByContainer } from '../containers/SearchByContainer';
import { SortByContainer } from '../containers/SortByContainer';

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

export default function Main({ movies, total }: MainProps) {
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
      <ResultBar total={total} />
      <MoviesList movies={movies} />
    </Container>
  );
}
