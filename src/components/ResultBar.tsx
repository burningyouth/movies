import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    marginTop: 20,
  },
  caption: {
    color: '#424242',
  },
});

export const ResultBar = ({ total }: { total: number }) => {
  const { caption, root } = useStyles();
  return (
    <Box className={root}>
      <Typography variant="body1" display="block" className={caption}>
        Found {total} movies
      </Typography>
    </Box>
  );
};
