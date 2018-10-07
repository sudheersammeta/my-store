'use strict';

module.exports = function(app) {
	let products = require('../controllers/productsController');

	// product Routes
	app.route('/products')
		.get(products.list_all_products)
		.post(products.create_a_product);

	app.route('/products/:productId')
		.get(products.get_a_product)
		.put(products.update_a_product)
		.delete(products.delete_a_product);
};
