import React from "react";
import "./App.css";
import Header from "./Header";
import Movies from "./Movies";
import SingleMovieCard from "./SingleMovieCard";
import { allMoviesData } from "./APIcalls";
import { Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      isSingleMovie: false,
      singleMovie: "",
      hasError: false,
      error: "",
      searchValue: "",
      searchResult: [],
    };
  }

  componentDidMount = () => {
    return allMoviesData()
      .then((data) => this.setState({ allMovies: data.movies }))
      .catch((error) =>
        this.setState({ hasError: true, error: `Oops! Something went wrong!` })
      );
  };

  filteredSearch = (value) => {
    this.setState({ searchValue: value });
    const filteredSearchResult = this.state.allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(this.state.searchValue.toLowerCase())
    );
    this.setState({ searchResult: filteredSearchResult });
  };

  clearSearch = () => {
    this.setState({ searchResult: [], searchValue: "" });
  };

  render() {
    return (
      <main className="App">
        <h1 className="title">🍅 Rancid Tomatillos 🍅</h1>
        <Header
          filteredSearch={this.filteredSearch}
          clearSearch={this.clearSearch}
          movies={this.state.allMovies}
        />
        {!this.state.searchValue.length && (
          <Route
            exact
            path="/"
            render={() => (
              <Movies
                movies={this.state.allMovies}
                searchResult={this.state.searchResult}
              />
            )}
          />
        )}
        {this.state.searchValue.length && (
          <Route
            exact
            path="/"
            render={() => <Movies movies={this.state.searchResult} />}
          />
        )}
        <Route
          exact
          path="/:id"
          render={({ match }) => <SingleMovieCard id={match.params.id} />}
        />
        {this.state.hasError && <h1>{this.state.error}</h1>}
      </main>
    );
  }
}

export default App;
