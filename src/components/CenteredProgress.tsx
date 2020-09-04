import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 30,
    marginBottom: 30,
  },
});

function CenteredProgress() {
  const { root } = useStyles();
  return (
    <div className={root}>
      <CircularProgress />
    </div>
  );
}

export default CenteredProgress;
