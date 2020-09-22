import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../typings';
import { Main } from '../components/Main';
import { Error } from '../components/Error';
import { CenteredBackdrop } from '../components/CenteredBackdrop';

export const MainContainer = () => {
  const appState = useSelector((state: RootState) => state);

  useEffect(() => {
    const id = appState.movieDetail.data.id;
    if (id) {
      const el = document.getElementById(`item_${id}`);
      if (el)
        el.scrollIntoView({
          block: 'start',
        });
    }
  }, [appState.movieDetail.data.id]);

  if (appState.movies.error) return <Error message={appState.movies.error} />;
  if (!appState.movies.data[0] && appState.movies.isFetching)
    return <CenteredBackdrop open={true} />;

  return <Main movies={appState.movies.data} total={appState.movies.total} />;
};
