//把虚拟dom， 转化为html代码！！！
export function initVnode(vnode){
  let { vtype } = vnode;

  if(!vtype){  // 没有 vtype ，就是一个文本
    return document.createTextNode(vnode);
  }

  // 1 : div span 等普通html
  // 2 : 函数式组件
  // 3 : 类式组件
  if(vtype ===1){
    return initVelement(vnode);
  }else if(vtype ===2){
    return initFuncComp(vnode);
  }else if(vtype ===3){
    return initClassComp(vnode);
  }

}

function initVelement(vnode){
  const {type, props, children} = vnode;
  const node = document.createElement(type);

  //过滤key style等特殊props
  const {ket,style,...reset} = props;
  //console.log(style)   //设置style
  //node.setAttribute('style','color:red');
  Object.keys(reset).forEach(k=>{
    node.setAttribute(k,reset[k]);
  })

  // 添加子元素！！！
  children.forEach(c=>{
    // 子元素也去调用vnode
    node.append(initVnode(c))
  })

  return node;
}

function initFuncComp(vnode){
  const {type, props, children} = vnode;
  console.log("我看看props是什么")
  console.log(props);
  let newnode = type(props);
  return initVnode(newnode);
}

function initClassComp(vnode){
  const {type, props, children} = vnode;
  let component = new type(vnode.props);
  let newNode = component.render();

  return initVnode(newNode);
}
