import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise';
import rootReducer from './app_reducer.js'

const middleware = applyMiddleware(thunk, promise);
const store = createStore(rootReducer, middleware);

export default store;