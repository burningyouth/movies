import React from 'react';

import {
  Grid,
  createStyles,
  Theme,
  makeStyles,
  Button,
} from '@material-ui/core';

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

function SearchBy({
  searchBy,
  setSearchBy,
}: {
  searchBy: string;
  setSearchBy: Function;
}) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid item xs={12} sm={4} className={classes.searchBy}>
        <Button
          variant={searchBy === 'title' ? 'contained' : 'outlined'}
          color="primary"
          className={classes.button}
          onClick={() => setSearchBy('title')}
        >
          Title
        </Button>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Button
          variant={searchBy === 'genres' ? 'contained' : 'outlined'}
          color="primary"
          className={classes.button}
          onClick={() => setSearchBy('genres')}
        >
          Genre
        </Button>
      </Grid>
    </React.Fragment>
  );
}

export default SearchBy;
