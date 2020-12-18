import { api } from '../../../lib/constants';
import { FETCH_HOME, FETCH_HOME_SUCCESS, FETCH_HOME_ERROR } from './types';

function fetchHome() {
  return {
    type: FETCH_HOME
  };
}

function fetchHomeSuccess(data) {
  return {
    type: FETCH_HOME_SUCCESS,
    data
  };
}

function fetchHomeError() {
  return {
    type: FETCH_HOME_ERROR
  };
}

export const requestHomeApi = `${api}/wp/v2/pages?slug=jess-home&_fields=acf`;

export function requestHome() {
  return (dispatch) => {
    dispatch(fetchHome());
    return fetch(requestHomeApi)
      .then((response) => response.json())
      .then(
        (data) => dispatch(fetchHomeSuccess(data)),
        () => dispatch(fetchHomeError())
      );
  };
}
