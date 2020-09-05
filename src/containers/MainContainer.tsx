import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '..';
import Main from '../components/Main';
import Error from '../components/Error';

function MainContainer() {
  const moviesState = useSelector((state: RootState) => state.movies);

  if (moviesState.error) return <Error message={moviesState.error} />;

  return <Main moviesState={moviesState} />;
}

export default MainContainer;
