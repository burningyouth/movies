import { combineReducers, Action } from 'redux';
import * as ActionTypes from '../actions/actionTypes';
import { FetchAction, ReceiveAction } from '../typings';

function movies(state = {}, action: FetchAction | ReceiveAction) {
  switch (action.type) {
    case ActionTypes.FETCH_MOVIES:
      switch ((action as FetchAction).status) {
        case 'REQUEST':
          return Object.assign({}, state, {
            isFetching: true,
          });
        case 'SUCCESS':
          return Object.assign({}, state, {
            isFetching: false,
          });
        case 'ERROR':
          return Object.assign({}, state, {
            isFetching: false,
            error: (action as FetchAction).error,
          });
      }
    case ActionTypes.RECEIVE_MOVIES:
      return Object.assign({}, state, {
        isFetching: false,
        movies: (action as ReceiveAction).movies,
      });
    default:
      return state;
  }
}

function genres(state = {}, action: FetchAction | ReceiveAction) {
  switch (action.type) {
    case ActionTypes.FETCH_GENRES:
      if ((action as FetchAction).status === 'ERROR') {
        return Object.assign({}, state, {
          isFetching: false,
          error: (action as FetchAction).error,
        });
      }
    case ActionTypes.RECEIVE_GENRES:
      return Object.assign({}, state, {
        isFetching: false,
        genres: (action as ReceiveAction).genres,
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  movies,
  genres,
});

export default rootReducer;
