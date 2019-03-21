import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga'
import todoSagas from './sagas' 
//redux-thunk  解决异步代码拆分， 放到actionCreators中
//redux-logger
//redux-saga   解决异步代码拆分， 放到。。。
//redux-devtools-extension 中间件

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ }) : compose;

const enhancer = composeEnhancers( applyMiddleware(sagaMiddleware) );
const store = createStore(reducer, enhancer );

sagaMiddleware.run(todoSagas);

export default store;