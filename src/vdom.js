export function createVnode(vtype, type, props, children){
  return {vtype, type, props, children}
}

//把虚拟dom， 转化为html代码！！！
export function initVnode(vnode){
  let { vtype } = vnode;

  if(!vtype){  // 没有 vtype ，就是一个文本
    return document.createTextNode(vnode);
  }

  // 1 : div span 等普通html
  if(vtype ===1){
    return initVelement(vnode);
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
