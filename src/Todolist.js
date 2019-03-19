import React , { Component, Fragment } from 'react';
import store from './store';
import { getInputChangeAction, getAddTodoItemAction, getDeleteTodoItemAction } from './store/actionCreators'
import TodoListUI from './TodolistUI';
//Fragment react16提供的占位符

class TodoList extends Component {

  constructor( props ){
    super(props);
    this.state = store.getState();
    
    //订阅sotre的改变，会调用该方法
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    store.subscribe(this.handleStoreChange);
  }

  handleStoreChange(){
    this.setState(store.getState()); //组件中的state同步为store的数据
  }

  handleInputChange(e){
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleBtnClick(){//小小备注下，如果在使用原来的setState，公共store数据得不到更新，是不对的！！
    const action = getAddTodoItemAction();
    store.dispatch(action);
  }

  handleDelete(index){
    const action = getDeleteTodoItemAction(index);
    store.dispatch(action);
  }

  render(){
    return (
      <TodoListUI 
        inputValue={ this.state.inputValue }
        handleInputChange= { this.handleInputChange }
        inputList = { this.state.inputList }
        handleBtnClick = { this.handleBtnClick }
        handleDelete = { this.handleDelete }
      />
    )
  }
	
	componentDidMount(){
		// axios.get('./list.json').then( (res)=>{
		// 	console.log(res)
		// })
	}

}

export default TodoList;