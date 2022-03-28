import React from "react";
import './App.css';
import Header from "./Header";
import Movies from "./Movies";
import SingleMovieCard from "./SingleMovieCard";
import {allMoviesData, singleMovieData} from './APIcalls';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      allMovies: [],
      isSingleMovie: false,
      singleMovie: '',
      hasError: false,
      error: ''
    }
  }

  componentDidMount = () => {
    return allMoviesData()
    .then(data => this.setState({allMovies: data.movies}))
      .catch(error => this.setState({hasError: true, error: `Oops! Something went wrong!`}))
  }

  displayMovieInfo = (id) => {
    return singleMovieData(id)
    .then(data => this.setState({isSingleMovie: true, singleMovie: data.movie}))
      .catch(error => this.setState({hasError: true, error: `Oops! Something went wrong!`}))
  }

  hideSingleView = () => {
    this.setState({ isSingleMovie: false })
  }

  render() {
    return (
      <main className='App'>
        <h1>🍅 Rancid Tomatillos 🍅</h1>
        <Header />
        {!this.state.isSingleMovie && <Movies movies={this.state.allMovies} displayMovieInfo={this.displayMovieInfo}/>}
        {this.state.isSingleMovie && <SingleMovieCard  displayMovieInfo={this.displayMovieInfo} hideSingleView={this.hideSingleView} singleMovie={this.state.singleMovie} />}
        {this.state.hasError && <h1>{this.state.error}</h1>}
      </main>
    );
  }
}

export default App;
