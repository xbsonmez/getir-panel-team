import {
    GET_TASKS_REQUEST,
    GET_TASKS_SUCCESS,
    GET_TASKS_FAILURE,
    
    CREATE_TASKS_REQUEST,
    CREATE_TASKS_SUCCESS,
    CREATE_TASKS_FAILURE,

    UPDATE_TASKS_REQUEST,
    UPDATE_TASKS_SUCCESS,
    UPDATE_TASKS_FAILURE,

    DELETE_TASKS_REQUEST, 
    DELETE_TASKS_SUCCESS,
    DELETE_TASKS_FAILURE,
  } from '../constants';
  
  const initialState = {
    data: {},
    postData: {},
    updateData: {},
    deleteData: {},
    isLoading: false,
    error: null,
  };
  
  export default function taskReducer (state = initialState, action)  {
    switch (action.type) {
      case GET_TASKS_REQUEST:
        return { ...state, isLoading: true, error: null };
      case GET_TASKS_SUCCESS:
        return { ...state, data: action.payload, isLoading: false, error: null };
      case GET_TASKS_FAILURE:
        return { ...state, isLoading: false, error: action.message };

        case CREATE_TASKS_REQUEST:
          return { ...state, isLoading: true, error: null };
        case CREATE_TASKS_SUCCESS:
          return { ...state, postData: action.payload, isLoading: false, error: null };
        case CREATE_TASKS_FAILURE:
          return { ...state, isLoading: false, error: action.message };

        case UPDATE_TASKS_REQUEST:
          return { ...state, isLoading: true, error: null };
        case UPDATE_TASKS_SUCCESS:
          return { ...state, updateData: action.payload, isLoading: false, error: null };
        case UPDATE_TASKS_FAILURE:
          return { ...state, isLoading: false, error: action.message };

        
        case DELETE_TASKS_REQUEST:
          return { ...state, isLoading: true, error: null };
        case DELETE_TASKS_SUCCESS:
          return { ...state, deleteData: action.payload, isLoading: false, error: null };
        case DELETE_TASKS_FAILURE:
          return { ...state, isLoading: false, error: action.message };
      
      default:
        return state;
    }
  };
  