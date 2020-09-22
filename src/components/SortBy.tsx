import React from 'react';

import { Grid, createStyles, Theme, makeStyles } from '@material-ui/core';

import SortSelect from './SortSelect';
import { SortOptions, SortByProps, SortOrder } from '../typings';

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

export const SortBy = ({
  sortBy,
  sortOptions,
  sortOrder,
  handleSortBy,
  handleSortOrder,
}: SortByProps) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid item xs={12} sm={4} className={classes.sortBy}>
        <SortSelect
          label="Sort by"
          value={sortBy}
          handleValue={(sortOption: keyof SortOptions) =>
            handleSortBy(sortOption)
          }
          sortOptions={sortOptions}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <SortSelect
          label="Sort order"
          value={sortOrder}
          handleValue={(sortOrder: keyof SortOrder) =>
            handleSortOrder(sortOrder)
          }
          sortOrder={{ desc: 'Descending', asc: 'Ascending' }}
        />
      </Grid>
    </React.Fragment>
  );
};
