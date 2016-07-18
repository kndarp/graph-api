var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var GraphQL = require('graphql');
var MovieSchema = require('./models/MovieSchema.js');
var path = require('path');

var app = express();

mongoose.set('debug', true);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text({type: 'application/graphql'}));

app.use(express.static(path.join(__dirname,'ui/dist')));

app.post('/',function(req,res) {
  GraphQL.graphql(MovieSchema,req.body).then(function(result) {
    res.send(result);
  })
})

app.listen(8080,function() {
  console.log("Live on 8080");
  mongoose.connect('mongodb://localhost/movies');
});
module.exports = app;
