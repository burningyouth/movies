import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { LoadMoreButton } from '../components/LoadMoreButton';
import { RootState } from '../typings';
import { fetchMovies } from '../actions';
import { CenteredProgress } from '../components/CenteredProgress';

export const LoadMoreButtonContainer = () => {
  const dispatch = useDispatch();
  const moviesState = useSelector((state: RootState) => state.movies);
  if (moviesState.isFetching) return <CenteredProgress />;
  if (moviesState.total === moviesState.data.length) return <React.Fragment />;
  return (
    <LoadMoreButton
      handleClick={() => dispatch(fetchMovies(moviesState.page + 1))}
    />
  );
};
