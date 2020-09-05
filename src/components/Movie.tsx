import React from 'react';

import { MovieEntity } from '../typings';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  actionArea: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  mainContent: {
    width: 'calc(100% - 32px)',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  genres: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: 50,
    paddingLeft: 16,
    paddingRight: 16,
  },
  genresWrapper: {
    width: '100%',
  },
  chip: {
    marginRight: 10,
  },
  overview: {
    height: 75,
    overflow: 'hidden',
  },
  title: {
    height: 35,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
});

function Movie({ movie }: { movie: MovieEntity }) {
  const classes = useStyles();
  if (movie.overview.length > 150)
    movie.overview = movie.overview.substr(0, 150).trim() + '...';
  const genresComponents = movie.genres.slice(0, 3).map((genre) => {
    return (
      <Chip size="small" label={genre} className={classes.chip} key={genre} />
    );
  });
  const { media } = makeStyles({
    media: {
      height: 450,
      width: '100%',
      backgroundSize: 'cover',
      backgroundImage: `url(${movie.poster_path}), url(notfound.jpg)`,
    },
  })();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <Link to={`/detail/${movie.id}`} className={classes.link}>
          <CardActionArea className={classes.actionArea}>
            <CardMedia
              className={media}
              title="Movie poster"
              src="notfound.jpg"
            />
            <CardContent className={classes.mainContent}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.title}
              >
                {movie.title}
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.overview}
              >
                {movie.overview}
              </Typography>
            </CardContent>
            <div className={classes.genresWrapper}>
              <Divider light />
              <div className={classes.genres}>
                {genresComponents}
                {movie.genres.length > 3 && (
                  <Chip
                    size="small"
                    label="···"
                    className={classes.chip}
                    key="···"
                  />
                )}
              </div>
            </div>
          </CardActionArea>
        </Link>
      </Card>
    </Grid>
  );
}

export default Movie;
