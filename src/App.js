import React from "react";
import './App.css';
import Header from "./Header";
import Movies from "./Movies";
import SingleMovieCard from "./SingleMovieCard";
import {allMoviesData} from './APIcalls';
import {Route} from 'react-router-dom';


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

    render() {
    return (
      <main className='App'>
        <h1 className = 'title'>🍅 Rancid Tomatillos 🍅</h1>
        <Header />
          <Route exact path="/" render={() => <Movies movies={this.state.allMovies} />} />
          <Route exact path="/:id" render={({match}) => <SingleMovieCard id={match.params.id} />} />         
        {this.state.hasError && <h1>{this.state.error}</h1>}
      </main>
    );
  }
}

export default App;
