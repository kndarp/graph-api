var React = require('react');
var SearchBar = require('./SearchBar');
var CardLayout = require('./CardLayout');
var Nav = require('./Nav');

var SearchApp = React.createClass({

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
          <div className= "container">
            <SearchBar
              criteria = "Title"
              onChange = {this.handleChange}
            />
            <CardLayout movies = {this.state.movies} context = "results" onChange = {this.handleChange}/>
          </div>
        </div>
      );
    }
});

module.exports = SearchApp;
