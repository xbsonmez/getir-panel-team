import { combineReducers } from 'redux'
import taskReducer from './taskReducer';

const rootReducer = combineReducers({ 
    allTask: taskReducer,
});

export default rootReducer;

