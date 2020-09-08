import React from 'react';

import {
  Grid,
  createStyles,
  Theme,
  makeStyles,
  Button,
} from '@material-ui/core';

import { SearchByProps } from '../typings';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      width: '100%',
    },
    searchBy: {
      marginRight: 20,
      [theme.breakpoints.down('xs')]: {
        marginRight: 0,
        marginBottom: 20,
      },
    },
  }),
);

export const SearchBy = ({ searchBy, handleSearchBy }: SearchByProps) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid item xs={12} sm={4} className={classes.searchBy}>
        <Button
          variant={searchBy === 'title' ? 'contained' : 'outlined'}
          color="primary"
          className={classes.button}
          onClick={() => handleSearchBy('title')}
        >
          Title
        </Button>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Button
          variant={searchBy === 'genres' ? 'contained' : 'outlined'}
          color="primary"
          className={classes.button}
          onClick={() => handleSearchBy('genres')}
        >
          Genre
        </Button>
      </Grid>
    </React.Fragment>
  );
};
