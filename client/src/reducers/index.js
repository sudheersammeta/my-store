import { combineReducers } from 'redux';

import { products } from './products.reducer';


const appReducer = combineReducers({
  products
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;