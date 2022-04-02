import React from "react";
import "./Header.css";
import {Link} from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  handleChange = (e) => {
    // console.log('FIRING') once you start typing
    //do we need e.preventDefault?
    this.setState({input: e.target.value}, () => {
      this.props.filteredSearch(e.target.value)
    });
  }

  submitSearch = (e) => {
    // console.log('FIRING') onclick
    e.preventDefault();
    this.props.filteredSearch(this.state.input)
  }

  clearForm = () => {
    this.setState({input: ''});
    console.log(this.props)
    this.props.clearSearch()
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

        {/* {this.props.state.searchValue.length && (<button className="home-button" onClick = {this.clearForm}>RETURN HOME</button>)} */}
        <div>
          <Link to="/" ><button className="home-button" onClick = {this.clearForm}>RETURN HOME</button></Link>
        </div>
        {/* <Link to="/" ><button className="x-button">X</button></Link> */}
      </form>
    )
  }
}

export default Header;
