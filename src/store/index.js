import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
//import thunk from 'redux-thunk';  //这里不使用redux-thunk

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ }) : compose;

//const enhancer = composeEnhancers( applyMiddleware(thunk) );

const store = createStore( reducer, composeEnhancers() );

export default store;