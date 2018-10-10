// import {api} from '../constants/index';
let should = require('chai').should();
let expect = require('chai').expect;
let supertest = require("supertest");
const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001';
let API = supertest(api) ;
let assert = require('assert');
let express = require('express');
let initialValue = {name: "Name1", supplier:"Supplier1", productType: "Product Type1", brand: "Brand1", available: "Availability1"};




describe("Add, Access, Update and Delete the product", function(){
    let result = {};
    it('It shouldn\'t add  products to the service - availability should be an integer', function (done) {
        API.post('/products')
        // .set('Accept', 'application/x-www-form-urlencoded')
            .set('Accept', 'application/json')
            .send({name: "Name1", supplier:"Supplier1", productType: "Product Type1", brand: "Brand1", available: 'available'})
            //.expect(400)
            .end(function (err,res) {
                //console.log(res.text);
                let obj = JSON.parse(res.text);
                expect(res.status).to.equal(400);
                done();
            })
    });
    it('It should add product to the service', function (done) {
        API.post('/products')
        // .set('Accept', 'application/x-www-form-urlencoded')
            .set('Accept', 'application/json')
            .send({name: "Name1", supplier:"Supplier1", productType: "Product Type1", brand: "Brand1", available: 123})
            //.expect(201)
            .end(function (err,res) {
                //console.log(res.text);
                result = JSON.parse(res.text);
                expect(res.status).to.equal(201);
                done();
            })

    });

    it('It should access the products', function (done) {
        API.get('/products')
        // .set('Accept', 'application/x-www-form-urlencoded')

            .set('Accept', 'application/json')
            //.expect(200)
            .end(function (err,res) {
                //console.log(res.text);
                expect(res.status).to.equal(200);
                expect(res.text).to.not.have.length(0);
                done();
            })

    });

    it('It should update the product', function (done) {
        API.put(`/products/${result._id}`)
        // .set('Accept', 'application/x-www-form-urlencoded')

            .set('Accept', 'application/json')
            .send({name: "Name1", supplier:"Supplier1", productType: "Product Type1", brand: "Brand3", available: 12344})
            //.expect(200)
            .end(function (err,res) {
                //console.log(res.text);
                expect(res.status).to.equal(200);
                done();
            })

    });

    it('It should return error for a non-existent product', function (done) {
        API.put(`/products/1111`)
        // .set('Accept', 'application/x-www-form-urlencoded')

            .set('Accept', 'application/json')
            .send({name: "Name1", supplier:"Supplier1", productType: "Product Type1", brand: "Brand3", available: 12344})
            //.expect(404)
            .end(function (err,res) {
                //console.log(res.text);
                expect(res.status).to.equal(404);
                done();
            })

    });

    it('It should delete the product', function (done) {
        API.del(`/products/${result._id}`)
        // .set('Accept', 'application/x-www-form-urlencoded')

            .set('Accept', 'application/json')
            //.expect(200)
            .end(function (err,res) {
                //console.log(res.text);
                expect(res.status).to.equal(200);
                done();
            })

    });

    it('It should return error for a non-existent product', function (done) {
        API.del(`/products/2323232`)
        // .set('Accept', 'application/x-www-form-urlencoded')

            .set('Accept', 'application/json')
            //.expect(404)
            .end(function (err,res) {
                //console.log(res.text);
                expect(res.status).to.equal(404);
                done();
            })

    });



});



