var React = require('react');
var ButtonBlock = require('./ButtonBlock');


var Card = React.createClass({
  handleChange: function(response) {
      this.props.onChange(response);
  },
  render: function() {
    return(
      <div className="well clearfix">
        <div className="row">
          <div className="col-sm-3">
            <img className= "panel-media" src={this.props.movie.Poster} alt = {this.props.movie.Title}/>
          </div>
    			<div className="col-sm-6">
    				<h1>{this.props.movie.Title}</h1>
    			</div>
          <div className = "col-sm-3">
            <ButtonBlock type = {this.props.context} movie = {this.props.movie} onChange = {this.handleChange}/>
          </div>
    		</div>
      </div>
    );
  }
});


module.exports = Card;
