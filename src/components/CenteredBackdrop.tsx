import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Backdrop, CircularProgress, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    flexDirection: 'column',
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
});

export const CenteredBackdrop = ({ open }: { open: boolean }) => {
  const { root } = useStyles();
  return (
    <Backdrop className={root} open={open}>
      <Typography
        gutterBottom
        variant="body1"
        component="h3"
        color="textSecondary"
      >
        Loading...
      </Typography>
      <CircularProgress color="primary" />
    </Backdrop>
  );
};
