import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { queryUpdate } from '../actions';
import { SearchBar } from '../components/SearchBar';
import { RootState } from '../typings';

export const SearchBarContainer = () => {
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.searchInfo.query);
  return (
    <SearchBar
      query={query}
      handleQuery={(query: string) => dispatch(queryUpdate(query))}
    />
  );
};
