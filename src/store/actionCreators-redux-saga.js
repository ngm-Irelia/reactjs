/* 统一存放action */
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST, GET_INIT_LIST } from './actionTypes.js'
import axios from 'axios';
import store from './index.js';

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value: value
})

export const getAddTodoItemAction = () => ({ 
	type: ADD_TODO_ITEM,
})

export const getDeleteTodoItemAction = (index) => ({
	type: DELETE_TODO_ITEM,
	index
})

export const initListAction = (data) => ({
	type: INIT_LIST,
	data
})

export const getTodoList = () => ({
	type: GET_INIT_LIST
})



