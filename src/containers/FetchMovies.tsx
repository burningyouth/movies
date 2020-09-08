import React, { useEffect } from 'react';
import { fetchMovies } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../typings';

export const FetchMovies = () => {
  const dispatch = useDispatch();
  const searchInfo = useSelector((state: RootState) => state.searchInfo);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch, searchInfo]);

  return <React.Fragment />;
};
