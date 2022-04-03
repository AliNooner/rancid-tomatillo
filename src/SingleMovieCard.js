import React from "react";
import {singleMovieData} from './APIcalls';
import {Link} from 'react-router-dom';
import "./SingleMovieCard.css";

class SingleMovieCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: '',
      error: null
    }
  }

  singleMovieInfo = (id) => {
    return singleMovieData(id)
    .then(data => this.setState({ movie: data.movie}))
      .catch(error => this.setState({error: `Oops! Something went wrong!`}))
  }

  componentDidMount = () => this.singleMovieInfo(this.props.id)

  render() {
    let movie = this.state.movie;
    let singleMovieDetails;

    if (movie) {
      let movieGenres;
      let movieBudget = this.state.movie.budget.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        });
      let movieRevenue = this.state.movie.revenue.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        });
      let releaseDate = new Date(this.state.movie.release_date).toLocaleDateString('en-US');
        if(this.state.movie.genres.length > 1) {
          movieGenres = this.state.movie.genres.join(', ');
        } else {
          movieGenres = this.state.movie.genres.join('');
      }

      singleMovieDetails = (
        <div className="single-movie-card">
        <section className="title-card">
          <img
            className="backdrop-poster-img"
            src={this.state.movie.backdrop_path}
            alt={this.state.movie.title}
          />
          </section>
          <section className="detail-container">
          <h1>{this.state.movie.title}</h1>
            <h3>Release Date: {releaseDate}</h3>
            <h2>Overview: {this.state.movie.overview}</h2>
            <h2>Genre: {movieGenres}</h2>
            <h2>
              Budget:{" "}
              {movieBudget}
              </h2>
              <h2>
              Revenue:{" "}
              {movieRevenue}
            </h2>
            <h2>Runtime: {this.state.movie.runtime} minutes</h2>
            <h2>Tagline: {this.state.movie.tagline}</h2>
            <h2>Average Rating: {Math.round(this.state.movie.average_rating)}/10</h2>
          </section>
        </div>
      )
  }

    return (
      <div>
        <Link to="/" ><button className="x-button">X</button></Link>
        {singleMovieDetails}
      </div>
    )
  }
}

export default SingleMovieCard;
