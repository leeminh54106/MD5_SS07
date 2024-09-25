import { combineReducers } from 'redux';
import productReducer from './ProductReducer';

const rootReducer = combineReducers({
  listProducts: productReducer,
});

export default rootReducer;
