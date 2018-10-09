 import { productConstants } from '../constants';


const initialState = {productList : [], isAddProduct: false};

export function products(state = initialState, action) {

  switch (action.type) {
    case productConstants.POSTPRODUCT_SUCCESS:
      return {...state, productList : [...state.productList, action.payload], isAddProduct:!state.isAddProduct};

    case productConstants.GETALLPRODUCTS_SUCCESS:
      return {
        ...state,
        productList: action.payload
      };

    case productConstants.PUT_PRODUCT_SUCCESS:
      return {
        ...state,
        productList: state.productList.map(product =>
          product._id === action.payload._id
            ? action.payload
            : product
        )
      }; 

    case productConstants.DELETE_PRODUCT_SUCCESS:
      return {
        ...state, 
        productList: state.productList.filter(product =>
          product._id  !== action.payload
        )
      };

    case productConstants.TOGGLE_ADDPRODUCT:
      return {
        ...state,
        isAddProduct : !state.isAddProduct
      };


    default:
      return state;

  }
}