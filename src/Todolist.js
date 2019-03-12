import React , { Component, Fragment } from 'react';
import './styls.css';
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
        <div>
          <label htmlFor="insertArea" className="input-label">输入内容</label>
          <input id="insertArea" value={this.state.inputValue} 
            onChange={this.handleInputChange.bind(this)}
            ref={(input)=> this.aainput = input}
          /> 
          <button onClick={this.handleBtnClick.bind(this)}> 提交 </button>
        </div>
        <div>
          {
            this.state.inputList.map((item,index) => {
              return <div key={index} onClick={this.handleDelete.bind(this,index)} >{item}</div>
              //return <div key={index} onClick={this.handleDelete.bind(this,index)} dangerouslySetInnerHTML={{ __html:item }} ></div>

            })
          }
        </div>

          {/* 不转译的显示数据 dangerouslySetInnerHTML={{ __html:item }} */}

      </Fragment>
    )
  }

}

export default TodoList;