var React = require('react');

var SearchBar = React.createClass({
  getInitialState: function() {
      return {searchText: ''};
  },
  updateSearchText: function(e) {
      this.setState({searchText: e.target.value});
  },
  handleChanges: function(e) {
    e.preventDefault();
    var find = this.state.searchText;
    var sendThis = this.props.onChange;
    var url = "http://www.omdbapi.com/?s="+find;
    console.log(url);
    $.ajax({
      type: "GET",
      url: url
    }).done(function (response) {
      console.log(JSON.stringify(response.Search));
      sendThis(response.Search);
    });

  },
    render: function() {
    return(
      <form onSubmit = {this.handleChanges}>
        <label htmlFor = {this.props.criteria} className = "labels">
            {this.props.criteria}
          </label>
        <input
          placeholder = {this.props.criteria}
          id = {this.props.criteria}
          className = "searchFields"
          value = {this.state.searchText}
          ref = "searchTextInput"
          onChange = {this.updateSearchText}
          />
          <input className = "btn btn-lg" type = "submit" value = "GO" />
      </form>
    );
  }

});


module.exports = SearchBar;
