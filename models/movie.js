var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema;

    var movieSchema = new Schema({

      Title: {
        type: String
      },
      Year: {
        type: String
      },
      Rated: {
        type: String
      },
      Released: {
        type: String
      },
      Runtime: {
        type: String
      },
      Genre: {
        type: String
      },
      Director: {
        type: String
      },
      Writer: {
        type: String
      },
      Actors: {
        type: String
      },
      Plot: {
        type: String
      },
      Language: {
        type: String
      },
      Country: {
        type: String
      },
      Awards: {
        type: String
      },
      Poster: {
        type: String
      },
      Metascore: {
        type: String
      },
      imdbRating: {
        type: String
      },
      imdbVotes: {
        type: String
      },
      imdbID: {
        type: String
      },
      Type: {
        type: String
      },
      Response: {
        type: String
      }
    });

var Movie = mongoose.model('Movie', movieSchema);


module.exports = Movie;

  module.exports.getMovieByTitle = function(root,{Title}) {
    return new Promise(function(resolve,reject) {
      console.log("In getMoviesByTitle()");
      Movie.findOne({"Title": Title},function(err,data){
        err ? reject(err) : resolve(data);
      });
  });
}

module.exports.getMovies = function () {
  return new Promise(function(resolve,reject) {
    console.log("In getMovies()");
    Movie.find({}).exec(function(err,data){
      err ? reject(err) : resolve(data);
    })
  });
};

module.exports.addMovieToDB = function (roots,args) {
  var newMovie = new Movie(args);
  return new Promise(function(resolve,reject) {
    newMovie.save(function(err,res) {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.deleteMovieFromDB = function(root, {Title}) {
    return new Promise(function(resolve,reject) {
      Movie.findOne({"Title": Title}).remove(function(err, data) {
        if(err){
          reject("Error");
        }else{
          resolve("Deleted")
        }
    });
  });
};

module.exports.updateRatingInDB = function(root,{Title, Rating}){
  console.log("updateRatingInDB");
  return new Promise(function(resolve, reject) {
    console.log("Promise");
    Movie.update({"Title": Title},{"imdbRating": Rating},function(err,res){
      console.log("Callback");
      console.log("res: ",res);
      err ? reject("Error") : resolve("Updated");
    });
  });

};
