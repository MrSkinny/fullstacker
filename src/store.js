import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { cheeseReducer } from './reducers';

const store = createStore(cheeseReducer, applyMiddleware(thunk));

export default store;
