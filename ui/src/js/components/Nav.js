var React = require('react');
var Link = require('react-router').Link;

var Nav = React.createClass({
  render: function () {
    return(
      <div className="navbar navbar-fixed-top clearfix">
      	<div className="container clearfix">
      		<button className="navbar-toggle" data-target=".navbar-responsive-collapse" data-toggle="collapse" type="button">
      			<span className="icon-bar"></span>
      			<span className="icon-bar"></span>
      			<span className="icon-bar"></span>
      		</button>

      		<a className="navbar-brand brand" href="/"><img src="images/brand.png" alt="My Movies"/></a>

      		<div className="nav-collapse collapse navbar-responsive-collapse">
      			<ul className="nav navbar-nav">
      				<li><Link to="/">Favourites</Link></li>
              <li><Link to="/add">Add a movie</Link></li>
      			</ul>
      		</div>
      	</div>
      </div>
    );
  }
});


module.exports = Nav;
