import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducers'; //Import the reducer

// Connect our store to the reducers
export default createStore(reducers, applyMiddleware(thunk));
