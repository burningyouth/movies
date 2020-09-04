import React, { useEffect } from 'react';
import { fetchMovies } from '../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '..';
import Main from '../components/Main';
import Error from '../components/Error';
import Backdrop from '../components/CenteredBackdrop';

function MainContainer() {
  const dispatch = useDispatch();
  const moviesState = useSelector((state: RootState) => state.movies);
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (moviesState.error) return <Error message={moviesState.error} />;

  return <Main moviesState={moviesState} />;
}

export default MainContainer;
