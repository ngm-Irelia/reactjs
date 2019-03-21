import { takeEvery, put } from 'redux-saga/effects';
import {GET_INIT_LIST} from './actionTypes';
import axios from "axios";
import { initListAction } from './actionCreators'

function* getInitList() {
    try {
        const res = yield axios.get('./list.json');
        const action = initListAction(res);
        yield put(action);
    }catch{
        console.log("catch...");
        const action = initListAction(["hello", "axios", "ngm"]);
        yield put(action);
    }
   
}

// generator 函数
function* mySaga() {
    //在这捕获GET_INIT_LIST这个action
    yield takeEvery(GET_INIT_LIST, getInitList );
}

export default mySaga;