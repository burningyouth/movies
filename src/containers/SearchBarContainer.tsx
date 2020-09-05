import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { queryUpdate } from '../actions/actions';
import SearchBar from '../components/SearchBar';
import { RootState } from '..';

function SearchBarContainer() {
  const dispatch = useDispatch();
  const searchInfo = useSelector((state: RootState) => state.searchInfo);
  return (
    <SearchBar
      query={searchInfo.query}
      setQuery={(query: string) => dispatch(queryUpdate(query))}
    />
  );
}

export default SearchBarContainer;
