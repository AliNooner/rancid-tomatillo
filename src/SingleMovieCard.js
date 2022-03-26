import React from "react";
import "./SingleMovieCard.css";
// import MovieCard from "./MovieCard";
// import Movies from "./Movies";

const SingleMovieCard = ({ singleMovie, displayMovieInfo}) => {
  return (
    <div className="single-movie-card">
      <button className="x-button">X</button>
      <h1>{singleMovie.title}</h1>
      <img className="backdrop-poster-img" src={singleMovie.backdrop_path} alt={singleMovie.title}/>
      <h3>Release Date: {singleMovie.release_date}</h3>
    </div>
  )
}

export default SingleMovieCard;