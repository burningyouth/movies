import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { searchByUpdate } from '../actions/actions';
import SearchBy from '../components/SearchBy';
import { RootState } from '..';

function SearchByContainer() {
  const dispatch = useDispatch();
  const searchInfo = useSelector((state: RootState) => state.searchInfo);
  return (
    <SearchBy
      searchBy={searchInfo.searchBy}
      setSearchBy={(searchBy: string) => dispatch(searchByUpdate(searchBy))}
    />
  );
}

export default SearchByContainer;
