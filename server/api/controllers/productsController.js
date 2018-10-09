'use strict';

const mongoose = require('mongoose'),
  Product = mongoose.model('Products');



exports.list_all_products = function(req, res) {
  Product.find({}, function(err, product) {
    if (err)
      res.status(404).send(err);
    res.status(200).json(product);
  });
};


exports.create_a_product = function(req, res) {
  console.log(req.body);
  const new_product = new Product(req.body);
  new_product.save(function(err, product) {
    if (err)
      res.status(400).send(err);
    res.status(201).json(product);
  });
};

exports.get_a_product = function(req, res) {
  Product.findById(req.params.productId, function(err, product) {
    if (err)
      res.status(404).send(err);
    res.status(200).json(product);
  });
};

exports.update_a_product = function(req, res) {
  Product.findOneAndUpdate({_id:req.params.productId}, req.body, {new: true}, function(err, product) {
    if (err)
      res.status(404).send(err);
    res.status(200).json(product);
  });
};
// Product.remove({}).exec(function(){});
exports.delete_a_product = function(req, res) {

  Product.remove({
    _id: req.params.productId
  }, function(err, product) {
    if (err)
      res.status(404).send(err);
    res.status(200).json({ message: 'Product successfully deleted' });
  });
};
