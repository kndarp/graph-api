var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var SearchApp = require('./components/SearchApp');
var MovieApp = require('./components/MovieApp');
var HomePage = require('./pages/HomePage');
var Master = require('./pages/Master')

module.exports = (
<Route>
      <Route handler={MovieApp} name = "MovieApp" path="/"/>
      <Route handler={SearchApp} name = "SearchApp" path="/add"/>
</Route>
);
