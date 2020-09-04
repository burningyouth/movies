import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { queryUpdate } from '../actions/actions';
import SearchBar from '../components/SearchBar';

function SearchBarContainer() {
  const { query } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(queryUpdate(query));
  }, [dispatch, query]);
  return <SearchBar query={query} />;
}

export default SearchBarContainer;
