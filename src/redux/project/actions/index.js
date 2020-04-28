import { prependRequest } from '../../../lib/constants';
import {
  FETCH_PROJECTS,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_ERROR,
  FETCH_PROJECTS_RESET
} from './types';

function fetchProjects() {
  return {
    type: FETCH_PROJECTS
  };
}

function fetchProjectsSuccess(data) {
  return {
    type: FETCH_PROJECTS_SUCCESS,
    data
  };
}

function fetchProjectsError() {
  return {
    type: FETCH_PROJECTS_ERROR
  };
}

export function fetchProjectsReset() {
  return {
    type: FETCH_PROJECTS_RESET
  };
}

const requestProjectsApi = `${prependRequest}http://www.boggonbone.co.uk/api/wp-json/wp/v2/project?_fields=title,acf,slug`;

export const getRequestProjectsApi = slug =>
  slug ? `${requestProjectsApi}&slug=${slug}` : requestProjectsApi;

export function requestProjects(slug) {
  return dispatch => {
    dispatch(fetchProjects());
    return fetch(getRequestProjectsApi(slug))
      .then(response => response.json())
      .then(
        data => dispatch(fetchProjectsSuccess(data)),
        () => dispatch(fetchProjectsError())
      );
  };
}
