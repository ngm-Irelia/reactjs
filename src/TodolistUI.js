import React , { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

class TodoListUI extends Component {

  
  render(){
    return (
      <Fragment>
        <div style={{margin:'20px'}}>
          <label htmlFor="insertArea" className="input-label">输入内容</label>
          <Input placeholder="todo info" style={{width:'300px'}}
          id="insertArea" value={this.props.inputValue} 
          onChange={this.props.handleInputChange}
          ref={(input)=> this.aainput = input}
          ></Input>
          <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
          
 
        </div>
        <div>
          <List
            style={{width:'300px', margin:'20px'}}
            bordered
            dataSource={this.props.inputList}
            renderItem={ (item, index) => (<List.Item onClick={ ()=> {
              this.props.handleDelete(index) 
            } }>{item}</List.Item>) }
            
          ></List>
        </div>

          {/* 不转译的显示数据 dangerouslySetInnerHTML={{ __html:item }} */}

      </Fragment>
    )
  }

}

export default TodoListUI;