'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the product'
  },
  supplier: {
    type: String
  },
  productType: {
    type: String
  },
  brand: {
    type: String
  },
  available: {
    type: Number
  },
  lastUpdate: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('Products', ProductSchema);