var React = require('react');

var ButtonBlock = React.createClass({

    removeMovieFromDatabase : function () {
      var mutation = "mutation{deleteMovie(Title:\""+this.props.movie.Title+"\")}";
        var  query = "query {movies{Title,Poster}}";
        var  url   =   "/";
        var  sendThis = this.props.onChange;

      $.ajax({
        type: "POST",
        url: url,
        contentType: "application/graphql",
        data: mutation,
      }).done(function (response) {
        console.log(response);
        $.ajax({
          type: "POST",
          url: url,
          contentType: "application/graphql",
          data: query,
        }).done(function (response) {
          sendThis(response.data.movies);
        });
      });
    },
    addMovieToDatabase : function () {
      var mutation =  "mutation{addMovie(Title:\""+this.props.movie.Title+"\",Poster:\""+this.props.movie.Poster+"\"){Title, Poster}}";
      var  query = "query{movies{Title,Poster}}";
      var  url   =   "/";
      var  sendThis = this.props.onChange;
      console.log(mutation);

      $.ajax({
        type: "POST",
        url: url,
        contentType: "application/graphql",
        data: mutation,
      }).done(function (response) {
        console.log(response);
        // $.ajax({
        //   type: "POST",
        //   url: url,
        //   contentType: "application/graphql",
        //   data: query,
        // }).done(function (response) {
        //   sendThis(response.data.movies);
      // });
      });
    },
    render: function () {
      var type = this.props.type;
      var buttonClass = "";
      var buttonText = "";
      var buttonHandler = "";
      switch (type) {
        case "favorites":
            buttonClass = "btn-danger";
            buttonText = "Remove";
            buttonHandler = this.removeMovieFromDatabase;
          break;
        case"results":
            buttonClass = "btn-primary";
            buttonText = "Add";
            buttonHandler = this.addMovieToDatabase;
          break;
      }
      return (
          <div>
            <button className = "btn btn-block {buttonClass}" onClick = {buttonHandler}> {buttonText}</button>
          </div>
      );
    }
});

module.exports = ButtonBlock;
