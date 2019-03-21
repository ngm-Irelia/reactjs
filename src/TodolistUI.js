import React , { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

const TodoListUI = (props)=> {
  return (
      <Fragment>
        <div style={{margin:'20px'}}>
          <label htmlFor="insertArea" className="input-label">输入内容</label>
          <Input placeholder="todo info" style={{width:'300px'}}
            id="insertArea" value={props.inputValue} 
            onChange={props.handleInputChange}
            //ref={(input)=> this.aainput = input}
          ></Input>
          <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
          
 
        </div>
        <div>
          <List
            style={{width:'300px', margin:'20px'}}
            bordered
            dataSource={props.inputList}
            renderItem={ (item, index) => (<List.Item onClick={ ()=> {
              props.handleDelete(index) 
            } }>{item}</List.Item>) }
            
          ></List>
        </div>

          {/* 不转译的显示数据 dangerouslySetInnerHTML={{ __html:item }} */}

      </Fragment>
  )
}

export default TodoListUI;