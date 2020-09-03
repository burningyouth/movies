import * as ActionTypes from './actionTypes';

function requestMovies(query: string, page: number) {
  return {
    type: ActionTypes.FETCH_MOVIES,
    status: 'REQUEST',
    page,
    query,
  };
}

function successFetchingMovies() {
  return {
    type: ActionTypes.FETCH_MOVIES,
    status: 'SUCCESS',
  };
}

function failFetchingMovies(response: string) {
  return {
    type: ActionTypes.FETCH_MOVIES,
    status: 'ERROR',
    response,
  };
}

function recieveMovies(json: JSON) {
  return {
    type: ActionTypes.RECIEVE_MOVIES,
    items: JSON.stringify(json),
  };
}

export {
  requestMovies,
  successFetchingMovies,
  failFetchingMovies,
  recieveMovies,
};
