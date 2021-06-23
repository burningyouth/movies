import React, { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../typings';
import { Error } from '../components/Error';
import { CenteredBackdrop } from '../components/CenteredBackdrop';

const Main = lazy(() => import('../components/Main'));

export const MainContainer = () => {
  const appState = useSelector((state: RootState) => state);

  if (appState.movies.error) return <Error message={appState.movies.error} />;
  if (!appState.movies.data[0] && appState.movies.isFetching)
    return <CenteredBackdrop open={true} />;

  return (
    <Suspense fallback={<CenteredBackdrop open={true} />}>
      <Main movies={appState.movies.data} total={appState.movies.total} />
    </Suspense>
  );
};
