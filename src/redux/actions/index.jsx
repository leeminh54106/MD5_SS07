//import alias
import * as types from '../constants/actionType';

export const act_add = (product, quantity) => {
  return {
    type: types.ADD_CART,
    payload: { product, quantity },
  };
};
