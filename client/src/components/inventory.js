import React from 'react';
//import {Button} from 'reactstrap';
import Button from '@material-ui/core/Button';
import { Table } from 'reactstrap';
import {ProductEntry} from './ProductEntry'; 
import {ProductBar} from './ProductBar';
import { connect } from 'react-redux';
import { productActions } from '../actions';


class Inventory extends React.Component {

  componentDidMount(){
    this.props.getAllProducts();
  }

  render() {

    const showAdd = this.props.isAddProduct;
    const productList = this.props.productList;

    return (
      <div>
       	<h2>Inventory Details</h2>

        <div>
        {showAdd ? (
          <ProductBar addProduct = {this.props.addProduct} toggle= {this.props.toggleAddProduct} add = {this.props.isAddProduct}/>
          ) : (
          <Button onClick={this.props.toggleAddProduct} variant="contained" color="primary">Add Product </Button>
          )}
      </div>
      <br />
      <div>

     

        <Table striped>
          <thead>
            <tr>
              <th>Product </th>
              <th>Supplier</th>
              <th>Type</th>
              <th>Brand</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
           {productList &&
                    productList.map((product,index) => {
                            return(
                                <ProductEntry
                                    key={index}
                                    product={product}
                                    update={this.props.updateProduct}
                                    delete={this.props.deleteProduct}
                                />
                            );
                        })
                 }
        </tbody>
        </Table>
      </div>
       	
      </div>
    );
  }
}

function mapStateToProps(state) {
    // console.log("map state to props : " + JSON.stringify(state));
    // console.log(state);
    const { productList, isAddProduct } = state.products;
  return {productList, isAddProduct};
}
function mapDispatchToProps(dispatch) {
  // console.log("Iam in maptoDispatch");
   return {
       addProduct : (product) => dispatch(productActions.addProduct(product)),
       getAllProducts : () => dispatch(productActions.getAllProducts()),
       updateProduct: (product) => dispatch(productActions.updateProduct(product)),
       deleteProduct : (product) => dispatch(productActions.deleteProduct(product)),
       toggleAddProduct: () => dispatch(productActions.toggleAddProduct())
    };
} 

const connectedInventory = connect(mapStateToProps, mapDispatchToProps)(Inventory);

export {connectedInventory as Inventory};