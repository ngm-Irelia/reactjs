/* import React from 'react';
import ReactDOM from 'react-dom'; */

// 我们自己实现虚拟dom，就不能引用上面两个，我们自己手写一个
import React from './ngmreact';
import ReactDOM from './ngmreact-dom';


class Content extends React.Component{

  render(){
    return <h2>你好啊</h2>
  } 
}

function ContentD(){
  return <div>我是content</div>
}

ReactDOM.render( 
  <div className="id-first">
    <div id="aaa" class="ccc" style={{color:'red'}}>first 1
      <p>p标签</p>
    </div>
    hahaha
    <span>嘿嘿嘿</span>
    <Content />

    <ContentD />
  </div>
  , document.getElementById('root') ); //在这，把<App />里面的内容，放到html里面的root元素里面
