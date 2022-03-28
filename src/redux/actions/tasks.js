
import {
    GET_TASKS_REQUEST,
    CREATE_TASKS_REQUEST,
    UPDATE_TASKS_REQUEST,
    DELETE_TASKS_REQUEST,
    SET_TASKS_SUCCESS,
} from '../constants';

export function getTasks ()  {
  return {
      type:GET_TASKS_REQUEST,
  }
};

export function setTasks (list)  {
  return {
      type:SET_TASKS_SUCCESS,
      payload:list
  }
};

export function createTask (title)  {
  return {
      type:CREATE_TASKS_REQUEST,
      payload:title
  }
};

export function updateTask (card)  {
  return {
      type:UPDATE_TASKS_REQUEST,
      payload:card
  }
};

export function deleteTask (task) {
  return {
    type:DELETE_TASKS_REQUEST,
    payload:task
  }
};
