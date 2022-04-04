import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value }, () => {
      this.props.filteredSearch(e.target.value);
    });
  };

  submitSearch = (e) => {
    e.preventDefault();
    this.props.filteredSearch(this.state.input);
  };

  clearForm = () => {
    this.setState({ input: "" });
    console.log(this.props);
    this.props.clearSearch();
  };

  render() {
    return (
      <form>
        <input
          className="input-field"
          type="text"
          placeholder="Search title here"
          name="search"
          value={this.state.input}
          onChange={(event) => this.handleChange(event)}
        />
        <button className="search-button" onClick={this.submitSearch}>
          SEARCH
        </button>
        <Link to="/">
          <button className="home-button" onClick={this.clearForm}>
            HOME
          </button>
        </Link>
      </form>
    );
  }
}

export default Header;
