import {
  FETCH_PROJECTS,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_ERROR
} from '../../actions/projects-actions/types';

export const initialState = {
  isInitial: true,
  isPending: false,
  data: [],
  hasError: false
};

function projects(state = initialState, { type, data }) {
  switch (type) {
    case FETCH_PROJECTS:
      return {
        ...state,
        isInitial: false,
        isPending: true
      };
    case FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        isInitial: false,
        isPending: false,
        data
      };
    case FETCH_PROJECTS_ERROR:
      return {
        ...state,
        isInitial: false,
        isPending: false,
        hasError: true
      };
    default:
      return state;
  }
}

export default projects;
