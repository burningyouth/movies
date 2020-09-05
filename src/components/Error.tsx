import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 300,
  },
});

function Error(props: any) {
  const { root } = useStyles();
  return (
    <Container maxWidth="lg" className={root}>
      <Typography variant="h5" component="h1" color="textSecondary">
        {props.message}
        {props.children}
      </Typography>
    </Container>
  );
}

export default Error;
