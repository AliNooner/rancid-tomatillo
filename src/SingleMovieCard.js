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
    let singleMovieDetails;
    
    singleMovieDetails = (
       <div className="single-movie-card">
        <h1>{this.state.movie.title}</h1>
        <img
          className="backdrop-poster-img"
          src={this.state.movie.backdrop_path}
          alt={this.state.movie.title}
        />
        <h3>Release Date: {this.state.movie.release_date}</h3>
        <h2>Overview: {this.state.movie.overview}</h2>
        <h2>Genre: {this.state.movie.genres}</h2>
        <h2>
          Budget:{" "}
          {this.state.movie.budget}
        </h2>
        <h2>
          Revenue:{" "}
          {this.state.movie.revenue}
        </h2>
        <h2>Runtime: {this.state.movie.runtime} minutes</h2>
        <h2>Tagline: {this.state.movie.tagline}</h2>
        <h2>Average Rating: {Math.round(this.state.movie.average_rating)}</h2>
      </div>
    )

    return (
      <div>
        <Link to="/" ><button className="x-button">X</button></Link>
        {singleMovieDetails}
        {/* {this.state.error} */}
      </div>
    )
  }
}


// const SingleMovieCard = ({ singleMovie, hideSingleView, displayMovieInfo }) => {
//   return (
    // <div className="single-movie-card">
    //   <button className="x-button" onClick={() => hideSingleView()}>
    //     X
    //   </button>
    //   <h1>{singleMovie.title}</h1>
    //   <img
    //     className="backdrop-poster-img"
    //     src={singleMovie.backdrop_path}
    //     alt={singleMovie.title}
    //   />
    //   <h3>Release Date: {singleMovie.release_date}</h3>
    //   <h2>Overview: {singleMovie.overview}</h2>
    //   <h2>Genre: {singleMovie.genres.join(", ")}</h2>
    //   <h2>
    //     Budget:{" "}
    //     {singleMovie.budget.toLocaleString("en-US", {
    //       style: "currency",
    //       currency: "USD",
    //     })}
    //   </h2>
    //   <h2>
    //     Revenue:{" "}
    //     {singleMovie.revenue.toLocaleString("en-US", {
    //       style: "currency",
    //       currency: "USD",
    //     })}
    //   </h2>
    //   <h2>Runtime: {singleMovie.runtime} minutes</h2>
    //   <h2>Tagline: {singleMovie.tagline}</h2>
    //   <h2>Average Rating: {Math.round(singleMovie.average_rating)}</h2>
    // </div>
//   );
// };

export default SingleMovieCard;
