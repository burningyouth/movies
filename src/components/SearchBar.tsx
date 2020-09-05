import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    marginTop: 30,
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

function SearchBar({ query, setQuery }: { query: string; setQuery: Function }) {
  const classes = useStyles();
  const [queryValue, setQueryValue] = useState(query);
  return (
    <React.Fragment>
      <form
        action={`/search/${queryValue}`}
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          setQuery(queryValue);
        }}
      >
        <Grid
          container
          spacing={3}
          className={classes.root}
          alignItems="flex-end"
        >
          <Grid item xs={8} sm={9}>
            <TextField
              label="Search"
              value={queryValue}
              className={classes.textField}
              onChange={(e) => {
                e.preventDefault();
                setQueryValue(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={4} sm={3}>
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
    </React.Fragment>
  );
}

export default SearchBar;
