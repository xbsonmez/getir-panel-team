import {call, put, takeEvery} from 'redux-saga/effects';
import {
    GET_TASKS_SUCCESS, 
    GET_TASKS_FAILURE,
    GET_TASKS_REQUEST,

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
import {
    requestGetTasks,
    requestPostTasks,
    requestUpdateTask,
    deteleTask
} from './requests/task';



function* getToDo(action) {
    try {
        const response = yield call(requestGetTasks);
        const {data} = response;
        yield put({type:GET_TASKS_SUCCESS, payload:data})
    }catch(e) {
        yield put({type:GET_TASKS_FAILURE, messages:e.messages})
    }
}

function* createToDo(action) {
    try {
        const response = yield call(requestPostTasks(action.payload));
        yield put({type:CREATE_TASKS_SUCCESS, payload:response.data})
    }catch(e) {
        yield put({type:CREATE_TASKS_FAILURE, messages:e.messages})
    }
}

function* updateToDo(action) {
    try {
        const response = yield call(requestUpdateTask(action.payload));
        yield put({type:UPDATE_TASKS_SUCCESS, payload:response.data})
    }catch(e) {
        yield put({type:UPDATE_TASKS_FAILURE, messages:e.messages})
    }
}

function* deleteToDo(action) {
    try {
        const response = yield call(deteleTask(action.payload));
        yield put({type:DELETE_TASKS_SUCCESS, payload:response.data})
    }catch(e) {
        yield put({type:DELETE_TASKS_FAILURE, messages:e.messages})
    }
}


export default function* taskSaga() {
    yield takeEvery(GET_TASKS_REQUEST, getToDo);
    yield takeEvery(CREATE_TASKS_REQUEST, createToDo);
    yield takeEvery(UPDATE_TASKS_REQUEST, updateToDo);
    yield takeEvery(DELETE_TASKS_REQUEST, deleteToDo);

}




