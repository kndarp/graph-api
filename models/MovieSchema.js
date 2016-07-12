var graphql = require('graphql');
var MovieType = require('../models/movieType.js');
var MovieQueries = require('../models/MovieQueries.js');
var MovieMutations = require('../models/MovieMutations.js');

var MainQuery = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    movie: MovieQueries.movie,
    movies: MovieQueries.movies
  }
});

var MainMutation = new graphql.GraphQLObjectType({
  name: "Mutation",
  fields: {
    addMovie: MovieMutations.addMovie,
    deleteMovie: MovieMutations.deleteMovie,
    updateRating: MovieMutations.updateRating
  }
})

var schema = new graphql.GraphQLSchema({
  query: MainQuery,
  mutation: MainMutation
});



module.exports = schema;
