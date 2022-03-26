import React from "react";
import "./SingleMovieCard.css";

const SingleMovieCard = ({ singleMovie, hideSingleView, displayMovieInfo}) => {
  return (
    <div className="single-movie-card">
      <button className="x-button" onClick={() => hideSingleView()}>X</button>
      <h1>{singleMovie.title}</h1>
      <img className="backdrop-poster-img" src={singleMovie.backdrop_path} alt={singleMovie.title}/>
      <h3>Release Date: {singleMovie.release_date}</h3>
      <h2>Overview: {singleMovie.overview}</h2>
      <h2>Genre: {singleMovie.genre}</h2>
      <h2>Budget: {singleMovie.budget}</h2>
      <h2>Revenue: {singleMovie.revenue}</h2>
      <h2>Runtime: {singleMovie.runtime}</h2>
      <h2>Tagline: {singleMovie.tagline}</h2>
      <h2>Average Rating: {singleMovie.average_rating}</h2>
    </div>
  )
}

export default SingleMovieCard;
