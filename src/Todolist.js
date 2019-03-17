import React , { Component, Fragment } from 'react';
import './styls.css';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';
import { getInputChangeAction } from './store/actionCreators'

//import InputList from './InputList';
//Fragment react16提供的占位符

class TodoList extends Component {

  constructor( props ){
    super(props);
    //console.log(store.getState())
    this.state = store.getState();
    
    //订阅sotre的改变，会调用该方法
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  handleStoreChange(){
    this.setState(store.getState()); //组件中的state同步为store的数据
  }

  handleInputChange(e){
    /* let value = e.target.value;
    this.setState(()=>({
      inputValue:value
    })) */

    // ok 前面那么写没有问题呢。。。看看redux的写法
    /**
     * 理解：定义一个行为叫action， 行为的名字就是type，然后把需要的值放到value
     * 通过调用store的dispatch函数，进行操作store
     */

     // 第二版，这么写； 下面第三版就是把这些action， 整合到了一个文件中
    /* const action = {
      type: 'change_input_value',
      value: e.target.value
    } */


    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);

  }

  handleBtnClick(){
    //console.log(this.aainput)  // ref的使用

    /* this.setState((prevState, props)=>{ // prevState 之前的state  props父组件的值

      return {
        inputList:[...this.state.inputList, this.state.inputValue],
        inputValue:""
      }
    }) */


    //上面的暂时不用， 改为 rudux的写法
    const action = {
      type:"add_todo_item"
    }
    store.dispatch(action);

  }

  handleDelete(index){
    /* let list = [...this.state.inputList];
    list.splice(index,1);
    this.setState({
      inputList:list
    }) */

    const action = {
      type:"delete_todo_item",
      index
    }

    store.dispatch(action);
  }

  render(){
    return (
      <Fragment>
        <div style={{margin:'20px'}}>
          <label htmlFor="insertArea" className="input-label">输入内容</label>
          <Input placeholder="todo info" style={{width:'300px'}}
          id="insertArea" value={this.state.inputValue} 
          onChange={this.handleInputChange.bind(this)}
          ref={(input)=> this.aainput = input}
          ></Input>
          <Button type="primary" onClick={this.handleBtnClick.bind(this)}>提交</Button>
          
 
        </div>
        <div>
          <List
            style={{width:'300px', margin:'20px'}}
            bordered
            dataSource={this.state.inputList}
            renderItem={ (item, index) => (<List.Item onClick={this.handleDelete.bind(this,index)}>{item}</List.Item>) }
            
          ></List>
        </div>

          {/* 不转译的显示数据 dangerouslySetInnerHTML={{ __html:item }} */}

      </Fragment>
    )
  }

}

export default TodoList;