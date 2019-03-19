import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes.js'

const defaultState = {
  inputList:['123', '234'],
  inputValue:""
};

export default (state = defaultState, action) => {

  if(action.type === CHANGE_INPUT_VALUE){
    const newState = JSON.parse(JSON.stringify(state)); // 深拷贝
    newState.inputValue = action.value;
    return newState;
  }

  if(action.type === ADD_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state)); // 深拷贝
    newState.inputList.push( newState.inputValue );
    newState.inputValue = "";
    return newState;
  }

  if(action.type === DELETE_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state)); // 深拷贝
    newState.inputList.splice( action.index, 1 );
    
    return newState;
  }
  
  return state;
}