import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

import { CardMedia } from '@material-ui/core';
import { MovieEntity } from '../typings';

const useStyles = makeStyles({
  root: {
    marginTop: 40,
  },
  genresWrapper: {
    marginTop: 20,
  },
  chip: {
    marginRight: 10,
  },
});

function Detail({ movie }: { movie: MovieEntity }) {
  const { root, genresWrapper, chip } = useStyles();

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

  let genresComponents;

  if (Array.isArray(movie.genres))
    genresComponents = movie.genres.map((genre) => {
      return <Chip label={genre} className={chip} key={genre} />;
    });

  const { media } = makeStyles({
    media: {
      height: 600,
      backgroundOrigin: 'center',
      backgroundSize: 'cover',
      backgroundImage: `url(${movie.poster_path}), url(/notfound.jpg)`,
    },
  })();

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} className={root}>
        <Grid item xs={4}>
          <CardMedia
            className={media}
            title="Movie poster"
            src="/notfound.jpg"
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
            Released: {movie.release_date}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="h4"
            color="textSecondary"
          >
            Avg. rating: {movie.vote_average} / 10
          </Typography>
          <div className={genresWrapper}>{genresComponents}</div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Detail;