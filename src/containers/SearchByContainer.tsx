import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { searchByUpdate } from '../actions';
import { SearchBy } from '../components/SearchBy';
import { RootState, SearchBy as SearchByType } from '../typings';

export const SearchByContainer = () => {
  const dispatch = useDispatch();
  const searchBy = useSelector((state: RootState) => state.searchInfo.searchBy);
  return (
    <SearchBy
      searchBy={searchBy}
      handleSearchBy={(searchBy: SearchByType) =>
        dispatch(searchByUpdate(searchBy))
      }
    />
  );
};
