import axios from 'axios';
import {
  DELETE_PROJECT,
  EDIT_PROJECT,
  GET_PROJECTS_LOADING,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAILED,
  ADD_PROJECT,
} from './actionTypes';

export const deleteProject = (_id) => async (dispatch) => {
  try {
    const projects = await axios(
      {
        method: 'DELETE',
        url: 'http://localhost:8080/projects',
        data: {
          _id,
        },
      },
    );
    dispatch({ type: DELETE_PROJECT, payload: projects.data });
  } catch (err) {
    dispatch({ type: GET_PROJECTS_FAILED, payload: err.message });
  }
};

export const editProject = (formData, _id) => async (dispatch) => {
  try {
    const { data } = await axios(
      {
        method: 'PATCH',
        url: 'http://localhost:8080/cards',
        data: {
          _id,
          ...formData,
        },
      },

    );
    const payload = data;
    dispatch({ type: EDIT_PROJECT, payload });
  } catch (err) {
    dispatch({ type: GET_PROJECTS_FAILED, payload: err.message });
  }
};

export const getProjects = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PROJECTS_LOADING });
    const { data } = await axios.get('http://localhost:8080/projects');
    dispatch({ type: GET_PROJECTS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_PROJECTS_FAILED, payload: err.message });
  }
};

export const addProject = (data) => async (dispatch) => {
  try {
    await axios.post('http://localhost:8080/projects',
      {
        name: data.name,
        status: data.status,
        price: data.price,
        devs: data.devs,
      });
    const projects = await axios.get('http://localhost:8080/projects');
    dispatch({ type: ADD_PROJECT, payload: projects.data });
  } catch (err) {
    dispatch({ type: GET_PROJECTS_FAILED, payload: err.message });
  }
};
