import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { sortByUpdate, sortOrderUpdate } from '../actions/actions';
import SortBy from '../components/SortBy';
import { RootState } from '..';
import { SortOptions } from '../typings';

function SortByContainer() {
  const dispatch = useDispatch();
  const searchInfo = useSelector((state: RootState) => state.searchInfo);
  return (
    <SortBy
      sortBy={searchInfo.sortBy}
      sortOptions={searchInfo.sortOptions}
      setSortBy={(sortBy: keyof SortOptions) => dispatch(sortByUpdate(sortBy))}
      sortOrder={searchInfo.sortOrder}
      setSortOrder={(sortOrder: 'desc' | 'asc') =>
        dispatch(sortOrderUpdate(sortOrder))
      }
    />
  );
}

export default SortByContainer;
