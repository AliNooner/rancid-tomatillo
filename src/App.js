import React from "react";
// import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Movies from "./Movies";
import movieData from './data';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      allMovies: movieData.movies,
      isSingleMovie: false
    }
  }

displayMovieInfo = (id) => {
  // console.log("before", this.isSingleMovie);
  const singleMovieDetails = this.state.allMovies.find((movie) => {
    return movie.id === id;
  })
  this.setState({ isSingleMovie: true})
  // console.log("after", this.isSingleMovie)
}

  render() {
    return (
      <main className='App'>
        <h1>🍅 Rancid Tomatillos 🍅</h1>
        <Header />
        {!this.state.isSingleMovie && <Movies movies={this.state.allMovies} displayMovieInfo={this.displayMovieInfo}/>}
        {/* {this.state.isSingleMovie} && <SingleMovieCard movie={this.state.isSingleMovie}/> */}
      </main>
    );
  }
}

export default App;
