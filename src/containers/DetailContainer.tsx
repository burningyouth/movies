import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '..';

import Error from '../components/Error';
import Backdrop from '../components/CenteredBackdrop';
import Detail from '../components/Detail';
import { fetchMovie } from '../actions/actions';

function DetailContainer() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieDetail = useSelector((state: RootState) => state.movieDetail);
  useEffect(() => {
    dispatch(fetchMovie(id));
  }, [dispatch, id]);

  if (movieDetail.isFetching || !movieDetail.data.id)
    return <Backdrop open={true} />;
  if (movieDetail.error) return <Error message={movieDetail.error} />;

  document.title = movieDetail.data.title;

  return <Detail movie={movieDetail.data} />;
}

export default DetailContainer;
