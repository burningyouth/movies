import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import LoadMoreButton from '../components/LoadMoreButton';
import { RootState } from '..';
import { fetchMovies } from '../actions/actions';

function LoadMoreButtonContainer() {
  const dispatch = useDispatch();
  const moviesState = useSelector((state: RootState) => state.movies);
  if (moviesState.page === moviesState.totalPages) return <React.Fragment />;
  return (
    <LoadMoreButton
      isFetching={moviesState.isFetching}
      page={moviesState.page}
    />
  );
}

export default LoadMoreButtonContainer;
