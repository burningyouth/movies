import React from 'react';

import { MovieInterface } from '../typings';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  media: {
    height: 450,
    width: '100%',
    backgroundSize: 'cover',
  },
  actionArea: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  chip: {
    marginRight: 10,
  },
  mainContent: {
    height: 70,
  },
  genresContent: {
    width: '100%',
    height: 50,
    marginTop: 20,
  },
  genresWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    paddingLeft: 16,
    paddingRight: 16,
  },
});

function Movie({ movie }: { movie: MovieInterface }) {
  const {
    media,
    actionArea,
    mainContent,
    genresContent,
    genresWrapper,
    chip,
  } = useStyles();
  const overview = movie.overview && (
    <Typography
      gutterBottom
      variant="body2"
      color="textSecondary"
      component="p"
    >
      {movie.overview.length > 100
        ? movie.overview.substr(0, 100).trim() + '...'
        : movie.overview}
    </Typography>
  );
  const genresComponents = movie.genres.map((genre) => {
    return <Chip size="small" label={genre} className={chip} key={genre} />;
  });

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardActionArea className={actionArea} href={`/detail/${movie.id}`}>
          <CardMedia
            className={media}
            image={movie.posterImage || '/notfound.jpg'}
            title="Movie poster"
          />
          <CardContent className={mainContent}>
            <Typography gutterBottom variant="h4" component="h2">
              {movie.title}
            </Typography>
            {overview}
          </CardContent>
          <div className={genresContent}>
            <Divider light />
            <div className={genresWrapper}>
              {movie.adult && (
                <Chip
                  label="18+"
                  size="small"
                  className={chip}
                  color="secondary"
                />
              )}
              {genresComponents}
            </div>
          </div>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default Movie;
