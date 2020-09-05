import React from 'react';

import { Grid, createStyles, Theme, makeStyles } from '@material-ui/core';

import SortSelect from './SortSelect';
import { SortOptions } from '../typings';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sortBy: {
      marginRight: 20,
      [theme.breakpoints.down('xs')]: {
        marginRight: 0,
        marginBottom: 20,
      },
    },
  }),
);

function SortBy({
  sortBy,
  sortOptions,
  setSortBy,
  sortOrder,
  setSortOrder,
}: {
  sortBy: keyof SortOptions;
  sortOptions: SortOptions;
  setSortBy: Function;
  sortOrder: string;
  setSortOrder: Function;
}) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid item xs={12} sm={4} className={classes.sortBy}>
        <SortSelect
          label="Sort by"
          value={sortBy}
          setValue={(value: string) => setSortBy(value)}
          items={sortOptions}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <SortSelect
          label="Sort order"
          value={sortOrder}
          setValue={(value: string) => setSortOrder(value)}
          items={{ desc: 'Descending', asc: 'Ascending' }}
        />
      </Grid>
    </React.Fragment>
  );
}

export default SortBy;
