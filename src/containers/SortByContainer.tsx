import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { sortByUpdate, sortOrderUpdate } from '../actions';
import { SortBy } from '../components/SortBy';
import { SortOptions, RootState, SortOrder } from '../typings';

export const SortByContainer = () => {
  const dispatch = useDispatch();
  const searchInfo = useSelector((state: RootState) => state.searchInfo);
  return (
    <SortBy
      sortBy={searchInfo.sortBy}
      sortOptions={searchInfo.sortOptions}
      handleSortBy={(sortBy: keyof SortOptions) =>
        dispatch(sortByUpdate(sortBy))
      }
      sortOrder={searchInfo.sortOrder}
      handleSortOrder={(sortOrder: keyof SortOrder) =>
        dispatch(sortOrderUpdate(sortOrder))
      }
    />
  );
};
