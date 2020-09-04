import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { queryUpdate, searchByUpdate, sortByUpdate } from '../actions/actions';
import SearchBar from '../components/SearchBar';
import { RootState } from '..';

function SearchBarContainer() {
  const dispatch = useDispatch();
  const searchInfo = useSelector((state: RootState) => state.searchInfo);
  return (
    <SearchBar
      query={searchInfo.query}
      sortBy={searchInfo.sortBy}
      searchBy={searchInfo.searchBy}
      setSearchBy={(searchBy: string) => dispatch(searchByUpdate(searchBy))}
      setSortBy={(sortBy: string) => dispatch(sortByUpdate(sortBy))}
      setQuery={(query: string) => dispatch(queryUpdate(query))}
    />
  );
}

export default SearchBarContainer;
