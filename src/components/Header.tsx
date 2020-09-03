import React from 'react';

import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
});

function Header() {
  const { link } = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/" className={link}>
          <Typography variant="h6">Movie searcher</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
