const express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  mongoose = require('mongoose'),
  Task = require('./api/models/productsModel'),
  bodyParser = require('body-parser');

let cors = require('cors');
const routes = require('./api/routes/productsRoutes');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/rahidb');

//Enable CORS
var corsOptions = {
    origin: 'http://localhost:3000'
}
app.use(cors(corsOptions))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//console.log(req.body);
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
