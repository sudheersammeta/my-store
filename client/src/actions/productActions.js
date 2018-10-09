import { productConstants, api } from '../constants';

//const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001';
//const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001';

export const productActions = {
  addProduct,getAllProducts,updateProduct,deleteProduct,toggleAddProduct
};


function addProduct(product){
	// console.log( product);
	return dispatch => {    
    return fetch(`${api}/products`, { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(product)
    })
      .then(response => {
          if(response.status !== 201){
            return Promise.reject("Prduct addition failed");
          }
          return response.json();
        },
        error => {
          return Promise.reject("No Response from Server");
        })
      .then(product =>
      {    
        dispatch(success(product));
        //history.push('/dashboard');
      })
  }

  function success(payload) { return { type: productConstants.POSTPRODUCT_SUCCESS, payload } }
}

function getAllProducts(){
	return dispatch => {    
    return fetch(`${api}/products`, { 
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
    })
      .then(response => {
          if(response.status !== 200){
            return Promise.reject("Product fetch failed");
          }
          return response.json();
        },
        error => {
          return Promise.reject("No Response from Server");
        })
      .then(products =>
      {    
        dispatch(success(products));
        //history.push('/dashboard');
      })
  }

  function success(payload) { return { type: productConstants.GETALLPRODUCTS_SUCCESS, payload } }
}

function updateProduct(product){
	console.log( product);
	return dispatch => {    
    return fetch(`${api}/products/${product._id}`, { 
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(product)
    })
      .then(response => {
          if(response.status !== 200){
            return Promise.reject("Product update failed");
          }
          return response.json();
        },
        error => {
          return Promise.reject("No Response from Server");
        })
      .then(product =>
      {    
        dispatch(success(product));
      })
  }

  function success(payload) { return { type: productConstants.PUT_PRODUCT_SUCCESS, payload } }
}

function deleteProduct(product){
	console.log( product);
	return dispatch => {    
    return fetch(`${api}/products/${product._id}`, { 
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
    })
      .then(response => {
          if(response.status !== 200){
            return Promise.reject("Product delete failed");
          }
          return response.json();
        },
        error => {
          return Promise.reject("No Response from Server");
        })
      .then(message =>
      {    
        dispatch(success(product._id));
      })
  }

  function success(payload) { return { type: productConstants.DELETE_PRODUCT_SUCCESS, payload } }
}

function toggleAddProduct(){
  return dispatch => {
    dispatch(success("toggle"));
  }

  function success(payload) {return {type:productConstants.TOGGLE_ADDPRODUCT, payload }}
}