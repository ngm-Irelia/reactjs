
/**
 * 解析jsx代码时候自动调用的！ 所以我们看不到是在哪里显式调用
 * @param {*} type 类型 div，span等
 * @param {*} props 属性
 * @param {*} children 孩子
 */
function createElement(type,props, ...children){
  /* console.log("type是：："+type);
  console.log("props是：：");
  console.log(props)
  console.log("children是：："+children); */

  delete props.__source;
  delete props.__self;
  //这就是主要的， 就是把 children 挂载到了 props 上面
  //props.children = children;  
  //我们通过通用方法去实现：
  let vtype;
  if(typeof type === 'string'){
    vtype = 1;
  }
  
  return {vtype, type, props, children}; //重点！！  返回值做为 react-dom 的 render 方法的第一个参数！！！
}

export default { createElement }