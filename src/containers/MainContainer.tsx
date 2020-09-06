import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '..';
import Main from '../components/Main';
import Error from '../components/Error';

function MainContainer() {
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

  document.title = 'Movies';

  if (appState.movies.error) return <Error message={appState.movies.error} />;

  return <Main moviesState={appState.movies} />;
}

export default MainContainer;
