import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

//redux-thunk  解决异步代码拆分， 放到actionCreators中
//redux-logger
//redux-saga   解决异步代码拆分， 放到。。。
//redux-devtools-extension 中间件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ }) : compose;

const enhancer = composeEnhancers( applyMiddleware(thunk) );
const store = createStore(reducer, enhancer );

export default store;