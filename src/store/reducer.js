
const defaultState = {
  inputList:['123', '234'],
  inputValue:""
};

export default (state = defaultState, action) => {

  if(action.type === 'change_input_value'){
    console.log("我不进行操作，我看看store变化了没")
    console.log(state);
    const newState = JSON.parse(JSON.stringify(state)); // 深拷贝
    newState.inputValue = action.value;
    return newState;
  }

  if(action.type === 'add_todo_item'){
    const newState = JSON.parse(JSON.stringify(state)); // 深拷贝
    newState.inputList.push( newState.inputValue );
    newState.inputValue = "";
    return newState;
  }

  if(action.type === 'delete_todo_item'){
    const newState = JSON.parse(JSON.stringify(state)); // 深拷贝
    newState.inputList.splice( action.index, 1 );
    
    return newState;
  }
  
  return state;
}