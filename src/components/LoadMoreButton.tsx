import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import { CircularProgress } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import { fetchMovies } from '../actions/actions';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 30,
    marginBottom: 30,
  },
});

function LoadMoreButton({
  isFetching,
  page,
}: {
  isFetching: boolean;
  page: number;
}) {
  const { root } = useStyles();
  const dispatch = useDispatch();
  const inner = isFetching ? (
    <CircularProgress />
  ) : (
    <Button
      variant="outlined"
      color="primary"
      onClick={() => dispatch(fetchMovies(page + 1))}
    >
      Load more
    </Button>
  );

  return <div className={root}>{inner}</div>;
}

export default LoadMoreButton;
