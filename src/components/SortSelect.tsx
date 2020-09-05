import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: 20,
  },
});

function SortSelect({
  items,
  value,
  setValue,
  label,
}: {
  items: Object;
  value: string;
  setValue: Function;
  label: string;
}) {
  const { root } = useStyles();
  const menuItems = Object.keys(items).map((key: string) => {
    //@ts-ignore
    const item = items[key];
    return (
      <MenuItem value={key} key={key}>
        {item}
      </MenuItem>
    );
  });
  return (
    <FormControl className={root}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {menuItems}
      </Select>
    </FormControl>
  );
}

export default SortSelect;
