var React = require('react');
var Card = require('./Card');

var CardList = React.createClass({
  componentWillMount: function() {
    if(this.props.context == "favorites"){
      var query =  "query {movies{Title,Poster}}";
      var  url   =   "/";
      var  sendThis = this.props.onChange;

    $.ajax({
      type: "POST",
      url: url,
      contentType: "application/graphql",
      data: query,
    }).done(function (response) {
      console.log(JSON.stringify(response.data.movies));
      sendThis(response.data.movies);
    });
  }
  },
  handleChange: function(response) {
      this.props.onChange(response);
  },
  render: function () {

    var movies = this.props.movies;
    var context = this.props.context;
    var handler = this.handleChange;
    console.log(JSON.stringify(movies));
    var    publish = movies.map(function (movie) {
          console.log(movie);
          return (
            <Card movie= {movie} onChange = {handler} context = {context}/>
          );
        })

    return (
      <div className = "clearfix">
        {publish}
      </div>
    );
  }
});


module.exports = CardList;
