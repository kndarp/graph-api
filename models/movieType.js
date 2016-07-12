var graphql = require('graphql');

// Type
var movieType = new graphql.GraphQLObjectType({
  name: 'Movie',
  fields: {
    _id : {type: new graphql.GraphQLNonNull(graphql.GraphQLID)},
    Title: { type: graphql.GraphQLString },
    Year: { type: graphql.GraphQLString},
    Rated: { type: graphql.GraphQLString},
    Released: { type: graphql.GraphQLString},
    Runtime: { type: graphql.GraphQLString},
    Genre: { type: graphql.GraphQLString},
    Director: { type: graphql.GraphQLString},
    Writer: { type: graphql.GraphQLString},
    Actors: { type: graphql.GraphQLString},
    Plot: { type: graphql.GraphQLString},
    Language: { type: graphql.GraphQLString},
    Country: { type: graphql.GraphQLString},
    Awards: { type: graphql.GraphQLString},
    Poster: { type: graphql.GraphQLString},
    Metascore: { type: graphql.GraphQLString},
    imdbRating: { type: graphql.GraphQLString},
    imdbVotes: { type: graphql.GraphQLString},
    imdbID: { type: graphql.GraphQLString},
    Type: { type: graphql.GraphQLString},
    Response: { type: graphql.GraphQLString}
  }
});

module.exports = movieType;
