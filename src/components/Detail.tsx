import React from 'react';

import Error from './Error';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

import { useParams } from 'react-router-dom';
import { CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: 40,
  },
  media: {
    height: 600,
    backgroundOrigin: 'center',
    backgroundSize: 'cover',
  },
  genresWrapper: {
    marginTop: 20,
  },
  chip: {
    marginRight: 10,
  },
});

function Detail() {
  const { id } = useParams();
  const { root, media, genresWrapper, chip } = useStyles();
  if (!id) return <Error message="Type id of the movie!" />;
  const items = [
    {
      id: 1,
      popularity: 100,
      rating: 8,
      posterImage: 'https://picsum.photos/seed/picsum/200/300',
      language: 'en',
      title: 'Title 1',
      genres: ['action', 'rpg'],
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '2020-10-02',
      adult: true,
    },
    {
      id: 2,
      popularity: 100,
      rating: 8,
      language: 'en',
      posterImage: '',
      title: 'Title 1',
      genres: ['action', 'rpg'],
      overview:
        'Lorem ipsum dolor sit amet, magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '2020-10-02',
      adult: false,
    },
    {
      id: 3,
      popularity: 100,
      rating: 8,
      posterImage: 'https://picsum.photos/seed/picsum/200/300',
      language: 'en',
      title: 'Title 1',
      genres: ['action', 'rpg'],
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '2020-10-02',
      adult: false,
    },
    {
      id: 4,
      popularity: 100,
      rating: 8,
      posterImage: 'https://picsum.photos/seed/picsum/200/300',
      language: 'en',
      title: 'Title 1',
      genres: ['action', 'rpg'],
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '2020-10-02',
      adult: false,
    },
  ];

  const movie = items.filter((item) => {
    if (item.id !== +id) return false;
    return true;
  })[0];

  if (!movie) return <Error message="Wrong ID!" />;

  const overview = movie.overview && (
    <Typography
      gutterBottom
      variant="body2"
      color="textSecondary"
      component="p"
    >
      {movie.overview}
    </Typography>
  );

  const genresComponents = movie.genres.map((genre) => {
    return <Chip label={genre} className={chip} />;
  });

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} className={root}>
        <Grid item xs={4}>
          <CardMedia
            className={media}
            image={movie.posterImage || '/notfound.jpg'}
            title="Movie poster"
          />
        </Grid>
        <Grid item xs>
          <Typography gutterBottom variant="h4" component="h2">
            {movie.title}
          </Typography>
          {overview}
          <Typography
            gutterBottom
            variant="body2"
            component="h4"
            color="textSecondary"
          >
            Released: {movie.date}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="h4"
            color="textSecondary"
          >
            Avg. rating: {movie.rating} / 10
          </Typography>
          <div className={genresWrapper}>
            {movie.adult && (
              <Chip label="18+" className={chip} color="secondary" />
            )}
            {genresComponents}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Detail;
