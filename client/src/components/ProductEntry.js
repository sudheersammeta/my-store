import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import Modal from 'react-responsive-modal';
import TextField from '@material-ui/core/TextField';
import {Row, Col} from 'reactstrap';

class ProductEntry extends React.Component{

	state = {
	   isOpen: false,
	   modal : {...this.props.product}
	 };

	  onOpenModal = () => {
	   this.setState({ isOpen: true });
	 };

	 onCloseModal = () => {
	   this.setState({ isOpen: false, modal : {...this.props.product} });
	};

	handleChange= (e) => {
         const { id, value } = e.target;
         this.setState({modal: {...this.state.modal, [id]: value}});
    };

    onSave = (e) => {
    	this.props.update(this.state.modal);
    	this.onCloseModal();
    };


	render(){
		const {product} = this.props;
		const { isOpen } = this.state;
		
		return (
		<tr>
			<td>{product.name}</td>
			<td>{product.supplier}</td>
			<td>{product.productType}</td>
			<td>{product.brand}</td>
			<td>{product.available}</td>
			<td><Button onClick={this.onOpenModal}><EditIcon /></Button> 
			<Modal open={isOpen} 
			       onClose={this.onCloseModal} 
			       center>    
			  <Row>
			
		       	<TextField
		          id="name"
		          label="Name"
		          defaultValue={product.name}
		          onChange={this.handleChange}
		          margin="normal"
		          className = "input"
		        /> 
		        
		        &nbsp;
		        <TextField
		          id="supplier"
		          label="Supplier"
		          defaultValue={product.supplier}
		          onChange={this.handleChange}
		          margin="normal"
		        />
		        </Row>
		        <Row>
		        <TextField
		          id="productType"
		          label="Product Type"
		          defaultValue={product.productType}
		          onChange={this.handleChange}
		          margin="normal"
		        />&nbsp;
		        <TextField
		          id="brand"
		          label="Brand"
		          defaultValue={product.brand}
		          onChange={this.handleChange}
		          margin="normal"
		        />
		        </Row>
		        <Row>
		        <TextField
		          id="available"
		          label="Available"
		          defaultValue={product.available}
		          onChange={this.handleChange}
		          margin="normal"
		        />
		        </Row>
		        <Row>
		        	<Col xs="3">
				        <Button onClick={this.onSave} variant="contained" color="primary">Save </Button>
				     </Col>
				     <Col xs="3">   
				     	<Button variant="contained" color="primary" onClick={this.onCloseModal}>Cancel </Button>
			        </Col>
				</Row>
	        </Modal>
			<Button onClick={() => {this.props.delete(product);}}><DeleteIcon/></Button></td>			
        </tr>);
    }
}


export {ProductEntry};