import React , { Component, Fragment } from 'react';
import './styls.css';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
//import store from './store';

//import InputList from './InputList';
//Fragment react16提供的占位符

class TodoList extends Component {

  constructor( props ){
    super(props);
    this.state = {
      inputValue:'',
      inputList:["学习"]
    }
  }

  handleInputChange(e){
    let value = e.target.value;
    this.setState(()=>({
      inputValue:value
    }))
  }

  handleBtnClick(){
    console.log("点击按钮前的state：")
    console.log(this.aainput)
    this.setState((prevState, props)=>{

     // console.log(prevState);
     // console.log(props)
      return {
        inputList:[...this.state.inputList, this.state.inputValue],
        inputValue:""
      }
    })
    /* this.setState({
      inputList:[...this.state.inputList, this.state.inputValue],
      inputValue:""
    }) */
  }

  handleDelete(index){
    let list = [...this.state.inputList];
    list.splice(index,1);
    this.setState({
      inputList:list
    })
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