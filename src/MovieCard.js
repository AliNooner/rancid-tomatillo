import React from "react";
import "./MovieCard.css";

const MovieCard = ({ title, poster, id, singleMovieData, displayMovieInfo}) => {
  return (
    <div className="movie-card">
      <h3>{title}</h3>
      <img className="poster-img" src={poster} alt={title} onClick={() => displayMovieInfo(id)}/>
    </div>
  )
}

export default MovieCard;
