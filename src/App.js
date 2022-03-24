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
      allMovies: movieData.movies
    }
  }

  render() {
    return (
      <main className='App'>
        <h1>Rancid Tomatillos</h1>
        <Header />
        <Movies movies={this.state.allMovies}/>
      </main>
    );
  }
}

export default App;
