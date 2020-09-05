import React, { useEffect } from 'react';
import { fetchMovies, sortOptionsUpdate } from '../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '..';

function FetchMovies() {
  const dispatch = useDispatch();
  const searchInfo = useSelector((state: RootState) => state.searchInfo);
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch, searchInfo]);
  return <React.Fragment />;
}

export default FetchMovies;
