var React = require('react');
var CardLayout = require('./CardLayout')
var Nav = require('./Nav');

var MovieApp = React.createClass({

  getInitialState: function() {
    return{
      "movies": []
    };
  },
  handleChange: function(movies) {
      this.setState({
        movies: movies,
      });
  },
  render: function() {
      return(
        <div className = "container">
          <Nav />
          <CardLayout movies = {this.state.movies} context = "favorites" onChange = {this.handleChange}/>
        </div>
      );
    }
});


module.exports = MovieApp;
