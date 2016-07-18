var React = require('react');
var CardList = require('./CardList');

var CardLayout = React.createClass({
  handleChange: function(response) {
      this.props.onChange(response);
  },
  render: function() {
    return(
        <CardList movies = {this.props.movies} onChange = {this.handleChange} context = {this.props.context}/>
    );
  }
});


module.exports = CardLayout;
