import {
  FETCH_PROJECTS,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_ERROR,
  FETCH_PROJECTS_RESET
} from '../actions/types';
import projectsReducer, { initialState } from '.';

describe('Reducers: Projects', () => {
  it('should return the initial state', () => {
    expect(projectsReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_PROJECTS', () => {
    expect(
      projectsReducer(undefined, {
        type: FETCH_PROJECTS
      })
    ).toEqual({
      ...initialState,
      isPending: true,
      isInitial: false
    });
  });

  it('should handle FETCH_PROJECTS_SUCCESS', () => {
    expect(
      projectsReducer(undefined, {
        type: FETCH_PROJECTS_SUCCESS,
        data: 'test'
      })
    ).toEqual({
      ...initialState,
      isInitial: false,
      isPending: false,
      data: 'test'
    });
  });

  it('should handle FETCH_PROJECTS_ERROR', () => {
    expect(
      projectsReducer(undefined, {
        type: FETCH_PROJECTS_ERROR
      })
    ).toEqual({
      ...initialState,
      isInitial: false,
      isPending: false,
      hasError: true
    });
  });

  it('should handle FETCH_PROJECTS_RESET', () => {
    expect(
      projectsReducer(undefined, {
        type: FETCH_PROJECTS_RESET
      })
    ).toEqual({
      ...initialState
    });
  });
});
