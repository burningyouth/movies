import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

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

function LoadMoreButton({ handleClick }: { handleClick: Function }) {
  const { root } = useStyles();

  return (
    <div className={root}>
      <Button variant="outlined" color="primary" onClick={() => handleClick()}>
        Load more
      </Button>
    </div>
  );
}

export default LoadMoreButton;
