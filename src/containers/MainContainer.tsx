import React, { useEffect } from 'react';
import { fetchMovies } from '../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '..';
import Main from '../components/Main';
import Error from '../components/Error';

function MainContainer() {
  const dispatch = useDispatch();
  const moviesState = useSelector((state: RootState) => state.movies);
  const searchInfo = useSelector((state: RootState) => state.searchInfo);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch, searchInfo]);

  if (moviesState.error) return <Error message={moviesState.error} />;

  return <Main moviesState={moviesState} />;
}

export default MainContainer;
