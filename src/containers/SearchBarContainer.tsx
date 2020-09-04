import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { queryUpdate, searchByUpdate, sortByUpdate } from '../actions/actions';
import SearchBar from '../components/SearchBar';
import { RootState } from '..';

function SearchBarContainer() {
  const { query } = useParams();
  const dispatch = useDispatch();
  const searchInfo = useSelector((state: RootState) => state.searchInfo);
  useEffect(() => {
    dispatch(queryUpdate(query));
  }, [dispatch, query]);
  return (
    <SearchBar
      query={query}
      sortBy={searchInfo.sortBy}
      searchBy={searchInfo.searchBy}
      setSearchBy={(searchBy: string) => dispatch(searchByUpdate(searchBy))}
      setSortBy={(sortBy: string) => dispatch(sortByUpdate(sortBy))}
      setQuery={(query: string) => dispatch(queryUpdate(query))}
    />
  );
}

export default SearchBarContainer;
