import React from "react";
import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  handleChange = (e) => {
    this.setState({input: e.target.value}, () => {
      this.props.filteredSearch(e.target.value)
    });
  }

  submitSearch = (e) => {
    e.preventDefault();
    this.props.filteredSearch(this.state.input)
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Search title here'
          name='search'
          value={this.state.input}
          onChange = {event => this.handleChange(event)}
      />

        <button className="search-button" onClick = {this.submitSearch}>SEARCH</button>
      </form>
    )
  }
}

export default Header;
