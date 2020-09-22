import React, { useEffect, Suspense, lazy } from 'react';

import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Error } from '../components/Error';
import { CenteredBackdrop } from '../components/CenteredBackdrop';
import { fetchMovie, queryUpdate, searchByUpdate } from '../actions';
import { RootState } from '../typings';

//@ts-ignore
const Detail = lazy(() => import('../components/Detail'));

export const DetailContainer = () => {
  const { id }: { id: string } = useParams();
  const dispatch = useDispatch();
  const movieDetail = useSelector((state: RootState) => state.movieDetail);

  useEffect(() => {
    dispatch(fetchMovie(+id));
  }, [dispatch, id]);

  useEffect(() => {
    if (movieDetail.data.title && !movieDetail.isFetching)
      document.title = movieDetail.data.title;
  }, [movieDetail.data.title, movieDetail.isFetching]);

  if (movieDetail.error) return <Error message={movieDetail.error} />;
  if (movieDetail.isFetching || !movieDetail.data.id)
    return <CenteredBackdrop open={true} />;

  return (
    <Suspense fallback={<CenteredBackdrop open={true} />}>
      <Detail
        movie={movieDetail.data}
        handleQuery={(query: string) => {
          dispatch(searchByUpdate('genres'));
          return dispatch(queryUpdate(query));
        }}
      />
    </Suspense>
  );
};
