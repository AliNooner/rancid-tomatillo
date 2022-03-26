import React from "react";
import "./Header.css";

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      title: ''
    }
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Search title here'
          name='title'
          value={this.state.title}
          onChange = {event => this.handleChange(event)}
      />

        <button className="search-button" onClick = {event => this.submitIdea(event)}>SEARCH</button>
      </form>
    )
  }
}

export default Header;
