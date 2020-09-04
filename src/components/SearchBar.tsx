import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    marginTop: 30,
  },
  searchBy: {
    marginTop: 20,
  },
  textField: {
    width: '100%',
  },
  button: {
    width: '100%',
    marginTop: 'auto',
  },
  caption: {
    color: '#424242',
    textAlign: 'right',
  },
});

function SearchBar({ query }: { query: string }) {
  const classes = useStyles();
  const [queryValue, setQuery] = useState(query);
  return (
    <React.Fragment>
      <form action={`/search/${queryValue}`} noValidate autoComplete="off">
        <Grid
          container
          spacing={3}
          className={classes.root}
          alignItems="flex-end"
        >
          <Grid item xs={9}>
            <TextField
              label="Search"
              value={queryValue}
              className={classes.textField}
              onChange={(e) => {
                e.preventDefault();
                setQuery(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
      <Grid
        container
        spacing={3}
        className={classes.searchBy}
        alignItems="center"
      >
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Title
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="outlined" color="primary" className={classes.button}>
            Genre
          </Button>
        </Grid>
        <Grid item xs>
          <Typography
            variant="body1"
            display="block"
            className={classes.caption}
          >
            Sort by
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            RELEASE DATE
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="outlined" color="primary" className={classes.button}>
            RATING
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default SearchBar;
