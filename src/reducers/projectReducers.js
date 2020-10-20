import {
  DELETE_PROJECT,
  EDIT_PROJECT,
  GET_PROJECTS_LOADING,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAILED,
  ADD_PROJECT, ADD_DEVELOPERS_TO_PROJECT,
} from '../actions/actionTypes';

const getInitialState = {
  projects: [],
  isLoading: false,
  developersToProject: [],
  error: '',
};

const projectReducer = (state = getInitialState, action) => {
  switch (action.type) {
    case GET_PROJECTS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload,
        isLoading: false,
      };

    case GET_PROJECTS_FAILED:
      return {
        ...state,
        error: action.payload,
      };

    case DELETE_PROJECT:
      return {
        ...state,
        projects: action.payload,
      };

    case EDIT_PROJECT:
      return {
        ...state,
        project: action.payload,
      };

    case ADD_PROJECT:
      return {
        ...state,
        projects: action.payload,
      };
    case ADD_DEVELOPERS_TO_PROJECT:
      return {
        ...state,
        developersToProject: action.payload,
      };

    default:
      return state;
  }
};

export default projectReducer;
