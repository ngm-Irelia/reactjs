import { initVnode } from './vdom';

function render(vdom, container) {
  //console.log("vdom --- container +++++++++++++++++"); 
  //console.log(vdom);  // react.createElement 返回的数据
  //console.log(container); 
  let rootNode = initVnode(vdom);
  console.log(rootNode);
  
  //container.innerHTML = JSON.stringify(vdom,null,2)
  container.append(rootNode);
 
}

export default { render }