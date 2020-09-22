import React, { useReducer, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { SearchBarProps } from '../typings';

const useStyles = makeStyles({
  root: {
    marginTop: 30,
  },
  textField: {
    width: '100%',
    '& p': {
      position: 'absolute',
      bottom: '-30px',
    },
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

export const SearchBar = ({ query, handleQuery }: SearchBarProps) => {
  const classes = useStyles();
  const [error, setError] = useState('');
  const [queryState, queryDispatch] = useReducer(
    (state: any, action: { query: string }) => {
      let regex = /[*?&^%$@!()#|]/;
      setError('');
      if (action.query.match(regex)) {
        setError("Don't use special characters!");
        return action.query.replace(/[*?&^%$@!()#|]/, '');
      }
      return action.query;
    },
    query,
  );
  return (
    <React.Fragment>
      <form
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          handleQuery(queryState);
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
              value={queryState}
              className={classes.textField}
              error={error ? true : false}
              helperText={error}
              onChange={(e) => {
                e.preventDefault();
                queryDispatch({ query: e.target.value });
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
};
