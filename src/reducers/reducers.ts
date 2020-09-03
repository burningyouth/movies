import { combineReducers } from 'redux';
import * as ActionTypes from '../actions/actionTypes';
import { Action, MoviePayload } from '../typings';

function movies(state = {}, action: Action) {
  switch (action.type) {
    case ActionTypes.FETCH_MOVIES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case ActionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case ActionTypes.FETCH_MOVIES_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case ActionTypes.RECEIVE_MOVIES:
      return {
        ...state,
        isFetching: false,
        movies: (action.payload as MoviePayload).movies,
      };
    default:
      return state;
  }
}

function genres(state = {}, action: Action) {
  switch (action.type) {
    case ActionTypes.FETCH_GENRES_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case ActionTypes.RECEIVE_GENRES:
      return {
        ...state,
        isFetching: false,
        genres: (action.payload as MoviePayload).genres,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  movies,
  genres,
});

export default rootReducer;
