import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import { SortSelectProps } from '../typings';

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: 30,
  },
});

function SortSelect({
  sortOptions,
  sortOrder,
  value,
  handleValue,
  label,
}: SortSelectProps) {
  const { root } = useStyles();
  let menuItems;
  if (sortOptions) {
    menuItems = Object.keys(sortOptions).map((key) => {
      return (
        <MenuItem value={key} key={key}>
          {sortOptions[key]}
        </MenuItem>
      );
    });
  } else if (sortOrder) {
    menuItems = Object.keys(sortOrder).map((key) => {
      return (
        <MenuItem value={key} key={key}>
          {sortOrder[key]}
        </MenuItem>
      );
    });
  }
  return (
    <FormControl className={root}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select value={value} onChange={(e) => handleValue(e.target.value)}>
        {menuItems}
      </Select>
    </FormControl>
  );
}

export default SortSelect;
