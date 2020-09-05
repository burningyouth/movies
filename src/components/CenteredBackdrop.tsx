import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Backdrop, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    zIndex: 10,
    backgroundColor: 'transparent',
  },
});

function CenteredBackdrop({ open }: { open: boolean }) {
  const { root } = useStyles();
  return (
    <Backdrop className={root} open={open}>
      <CircularProgress color="primary" />
    </Backdrop>
  );
}

export default CenteredBackdrop;
