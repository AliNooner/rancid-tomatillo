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
      // singleMovieOverview: '',
      error: ''
    }
  }

  componentDidMount = () => {
    return allMoviesData()
    .then(data => this.setState({allMovies: data.movies}))
    .catch(error => this.setState({error: 'Oops! Something went wrong!'}))
  }


  // displayMovieInfo = (id) => {
  // const singleMovieDetails = this.state.allMovies.find((movie) => {
  //   return movie.id === id;
  // })
  //   this.setState({ isSingleMovie: true, singleMovie: singleMovieDetails })
    // return singleMovieData(id).then(data => this.setState({isSingleMovie: true, singleMovie: data.movie}))
// }

displayMovieInfo = (id) => {
  return singleMovieData(id)
  .then(data => this.setState({isSingleMovie: true, singleMovie: data.movie}))
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
      </main>
    );
  }
}

export default App;
