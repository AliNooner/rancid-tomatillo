import React from "react";
// import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Movies from "./Movies";
import movieData from './data';
import SingleMovieCard from "./SingleMovieCard";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      allMovies: movieData.movies,
      isSingleMovie: false,
      singleMovie: ''
    }
  }

displayMovieInfo = (id) => {
  const singleMovieDetails = this.state.allMovies.find((movie) => {
    return movie.id === id;
  })
  this.setState({ isSingleMovie: true})
  this.setState({singleMovie: singleMovieDetails})
}

  render() {
    return (
      <main className='App'>
        <h1>🍅 Rancid Tomatillos 🍅</h1>
        <Header />
        {!this.state.isSingleMovie && <Movies movies={this.state.allMovies} displayMovieInfo={this.displayMovieInfo}/>}
        {this.state.isSingleMovie && <SingleMovieCard movie={this.state.singleMovie} displayMovieInfo={this.displayMovieInfo} singleMovie={this.state.singleMovie}/>}
      </main>
    );
  }
}

export default App;
