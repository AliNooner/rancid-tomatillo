import React from "react";
import "./MovieCard.css";

const MovieCard = ({title, poster, id}) => {
  return (
    <div className="movie-card">
      <h3>{title}</h3>
      <img className="poster-img" src={poster}/>
      <button className="poster-button">Check me out!</button>
    </div>
  )
}

export default MovieCard;
