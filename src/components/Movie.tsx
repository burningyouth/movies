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
    height: 120,
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
});

function Movie({ movie }: { movie: MovieEntity }) {
  const {
    actionArea,
    mainContent,
    link,
    chip,
    genres,
    genresWrapper,
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
  const genresComponents = movie.genres.slice(0, 3).map((genre) => {
    return <Chip size="small" label={genre} className={chip} key={genre} />;
  });
  const { media } = makeStyles({
    media: {
      height: 450,
      width: '100%',
      backgroundSize: 'cover',
      backgroundImage: `url(${movie.poster_path}), url(/notfound.jpg)`,
    },
  })();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <Link to={`/detail/${movie.id}`} className={link}>
          <CardActionArea className={actionArea}>
            <CardMedia className={media} title="Movie poster" />
            <CardContent className={mainContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {movie.title}
              </Typography>
              {overview}
            </CardContent>
            <div className={genresWrapper}>
              <Divider light />
              <div className={genres}>{genresComponents}</div>
            </div>
          </CardActionArea>
        </Link>
      </Card>
    </Grid>
  );
}

export default Movie;
