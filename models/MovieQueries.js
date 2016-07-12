var graphql = require('graphql');
var Movie= require("../models/movie.js");
var MovieType = require("../models/movieType.js")

module.exports = {
    movies: {
      type: new graphql.GraphQLList(MovieType),
      resolve: Movie.getMovies
    }
    ,
    movie: {
      type: MovieType,
      args: {
        Title:  { 
          type: graphql.GraphQLString
        }
      },
      resolve: Movie.getMovieByTitle
    }
};
