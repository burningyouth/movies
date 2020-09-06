import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

import { CardMedia, Theme, createStyles } from '@material-ui/core';
import { MovieEntity } from '../typings';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 40,
      [theme.breakpoints.down('xs')]: {
        marginTop: 20,
      },
    },
    genresWrapper: {
      marginTop: 20,
    },
    chip: {
      marginRight: 10,
      marginBottom: 10,
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: 'rgb(210,210,210)',
      },
    },
    tagline: {
      fontSize: '1.2rem',
    },
    gutterBottom: {
      marginBottom: '0.5rem',
    },
    link: {
      textDecoration: 'none',
    },
  }),
);

function Detail({
  movie,
  setQuery,
}: {
  movie: MovieEntity;
  setQuery: Function;
}) {
  const classes = useStyles();

  const { media } = makeStyles((theme: Theme) =>
    createStyles({
      media: {
        height: 600,
        backgroundOrigin: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${movie.poster_path}), url(notfound.jpg)`,
        [theme.breakpoints.down('xs')]: {
          height: 400,
        },
      },
    }),
  )();

  const overview = movie.overview && (
    <Typography
      variant="body2"
      color="textSecondary"
      component="p"
      className={classes.gutterBottom}
    >
      {movie.overview}
    </Typography>
  );

  const tagline = movie.tagline && (
    <Typography
      className={classes.tagline}
      variant="h6"
      color="textSecondary"
      component="h2"
    >
      {movie.tagline}
    </Typography>
  );

  let genresComponents;

  if (Array.isArray(movie.genres))
    genresComponents = movie.genres.map((genre) => {
      return (
        <Link
          to="/"
          onClick={() => setQuery(genre)}
          key={genre}
          className={classes.link}
        >
          <Chip label={genre} className={classes.chip} />
        </Link>
      );
    });

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12} sm={7} md={5} lg={4}>
          <CardMedia
            className={media}
            title="Movie poster"
            src="notfound.jpg"
          />
        </Grid>
        <Grid item xs>
          <div className={classes.gutterBottom}>
            <Typography variant="h4" component="h1">
              {movie.title}
            </Typography>
            {tagline}
          </div>
          {overview}
          <Typography
            gutterBottom
            variant="body2"
            component="h4"
            color="textSecondary"
          >
            Released: {movie.release_date}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="h4"
            color="textSecondary"
          >
            Budget:{' '}
            {movie.budget ? `$${movie.budgetString}` : 'Not enough information'}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="h4"
            color="textSecondary"
          >
            Revenue:{' '}
            {movie.revenue
              ? `$${movie.revenueString}`
              : 'Not enough information'}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="h4"
            color="textSecondary"
          >
            Rating:{' '}
            {movie.vote_average
              ? `${movie.vote_average} / 10 (${movie.vote_count} votes)`
              : 'Not enough votes'}
          </Typography>
          <div className={classes.genresWrapper}>{genresComponents}</div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Detail;
