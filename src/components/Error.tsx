import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginTop: 40,
  },
});

function Error({ message }: { message: string }) {
  const { root } = useStyles();
  return (
    <Container maxWidth="lg" className={root}>
      <Typography variant="h5" component="h1" color="textSecondary">
        Error: {message}
      </Typography>
    </Container>
  );
}

export default Error;
