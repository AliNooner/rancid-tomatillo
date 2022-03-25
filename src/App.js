import React from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Movies from "./Movies";
import movieData from './data';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      allMovies: movieData.movies,
      // singleMovieData: {id: '', poster_path: '', backdrop_path: '', average_rating: ''}
    }
  }

// displayMovieInfo = (id) => {
//   console.log("before", this.singleMovieData);
//   const singleMovieDetails = this.state.allMovies.find((movie) => {
//     return movie.id === id;
//   })
//   this.setState({singleMovieData: singleMovieDetails})
//   console.log("after", this.singleMovieData)
// }

  displayMovieInfo = (id) => {
    console.log("before", this.state.allMovies);
    const singleMovieDetails = this.state.allMovies.find((movie) => {
      return movie.id === id;
    })
    console.log("ONE", singleMovieDetails)
    this.setState({ allMovies: singleMovieDetails })
    console.log("after", this.state.allMovies)
  }

  render() {
    return (
      <main className='App'>
        <h1>🍅 Rancid Tomatillos 🍅</h1>
        <Header />
        <Movies movies={this.state.allMovies} displayMovieInfo={this.displayMovieInfo}/>
      </main>
    );
  }
}

export default App;
