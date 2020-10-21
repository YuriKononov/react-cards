import {
  DELETE_USER,
  EDIT_USER,
  GET_USERS_LOADING,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED,
  ADD_USER,
  ADD_PROJECTS_TO_DEVELOPER,
} from '../actions/actionTypes';

const getInitialState = {
  users: [],
  isLoading: false,
  projectsToDeveloper: [],
  error: '',
};

const userReducer = (state = getInitialState, action) => {
  switch (action.type) {
    case GET_USERS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };

    case GET_USERS_FAILED:
      return {
        ...state,
        error: action.payload,
      };

    case DELETE_USER:
      return {
        ...state,
        users: action.payload,
      };

    case EDIT_USER:
      return {
        ...state,
        users: action.payload,
      };

    case ADD_USER:
      return {
        ...state,
        users: action.payload,
      };

    case ADD_PROJECTS_TO_DEVELOPER:
      return {
        ...state,
        projectsToDeveloper: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
