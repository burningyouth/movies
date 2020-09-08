import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Error } from '../components/Error';
import { CenteredBackdrop } from '../components/CenteredBackdrop';
import { Detail } from '../components/Detail';
import { fetchMovie, queryUpdate, searchByUpdate } from '../actions';
import { RootState } from '../typings';

export const DetailContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieDetail = useSelector((state: RootState) => state.movieDetail);

  useEffect(() => {
    dispatch(fetchMovie(+id));
  }, [dispatch, id]);

  useEffect(() => {
    if (movieDetail.data.title && !movieDetail.isFetching)
      document.title = movieDetail.data.title;
  }, [movieDetail.data.title, movieDetail.isFetching]);

  if (movieDetail.isFetching || !movieDetail.data.id)
    return <CenteredBackdrop open={true} />;
  if (movieDetail.error) return <Error message={movieDetail.error} />;

  return (
    <Detail
      movie={movieDetail.data}
      handleQuery={(query: string) => {
        dispatch(searchByUpdate('genres'));
        return dispatch(queryUpdate(query));
      }}
    />
  );
};
