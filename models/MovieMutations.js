var graphql = require('graphql');
var Movie= require("../models/movie.js");
var MovieType = require("../models/movieType.js")

module.exports = {
    addMovie: {
      type: MovieType,
      args: {
        Title: {
          type: graphql.GraphQLString
        },
        Year: {
          type: graphql.GraphQLString
        },
        Rated: {
          type: graphql.GraphQLString
        },
        Released: {
          type: graphql.GraphQLString
        },
        Runtime: {
          type: graphql.GraphQLString
        },
        Genre: {
          type: graphql.GraphQLString
        },
        Director: {
          type: graphql.GraphQLString
        },
        Writer: {
          type: graphql.GraphQLString
        },
        Actors: {
          type: graphql.GraphQLString
        },
        Plot: {
          type: graphql.GraphQLString
        },
        Language: {
          type: graphql.GraphQLString
        },
        Country: {
          type: graphql.GraphQLString
        },
        Awards: {
          type: graphql.GraphQLString
        },
        Poster: {
          type: graphql.GraphQLString
        },
        Metascore: {
          type: graphql.GraphQLString
        },
        imdbRating: {
          type: graphql.GraphQLString
        },
        imdbVotes: {
          type: graphql.GraphQLString
        },
        imdbID: {
          type: graphql.GraphQLString
        },
        Type: {
          type: graphql.GraphQLString
        },
        Response: {
          type: graphql.GraphQLString
        }
      },
      resolve: Movie.addMovieToDB
    }
    ,
    deleteMovie: {
      type: graphql.GraphQLString,
      args:{
        Title: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        }
      },
      resolve: Movie.deleteMovieFromDB
    }
    ,
    updateRating:{
      type: graphql.GraphQLString,
      args: {
        Title: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        Rating: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        }
      },
      resolve: Movie.updateRatingInDB
    }
  };
