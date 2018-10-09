import React from 'react';
//import {Button} from 'reactstrap';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Row, Col} from 'reactstrap';


const initialValues = {name: "", supplier:"", productType: "", brand: "", available: ""};

class ProductBar extends React.Component{

	constructor(props){
		super(props);

		this.state = {...initialValues};
		this.handleChange = this.handleChange.bind(this);
		// console.log(this.state);
		// console.log("in constructor");
	}

	handleChange= (e) => {
		//console.log(this.state);
        const { id, value } = e.target;
        this.setState({ [id]: value });
    };

    onSave = (e) => {
    	// console.log(this.state);
    	this.props.addProduct(this.state);
    };

	render(){
		// console.log(this.props);

		
		return (
		<div>
			<Row>
			
	       	<TextField
	          id="name"
	          label="Name"
	          value={this.state.name}
	          onChange={this.handleChange}
	          margin="normal"
	          className = "input"
	        /> 
	        
	        &nbsp;
	        <TextField
	          id="supplier"
	          label="Supplier"
	          value={this.state.supplier}
	          onChange={this.handleChange}
	          margin="normal"
	        />&nbsp;
	        <TextField
	          id="productType"
	          label="Product Type"
	          value={this.state.productType}
	          onChange={this.handleChange}
	          margin="normal"
	        />&nbsp;
	        <TextField
	          id="brand"
	          label="Brand"
	          value={this.state.brand}
	          onChange={this.handleChange}
	          margin="normal"
	        />&nbsp;
	        <TextField
	          id="available"
	          label="Available"
	          value={this.state.available}
	          onChange={this.handleChange}
	          margin="normal"
	        />
	        </Row>
	        <Row>
	        	<Col xs="1">
			        <Button onClick={this.onSave} variant="contained" color="primary">Save </Button>
			     </Col>
			     <Col xs="1">   
			     	<Button variant="contained" color="primary" onClick={this.props.toggle}>Cancel </Button>
		        </Col>
			</Row>
        </div>);
    }
}


export {ProductBar};