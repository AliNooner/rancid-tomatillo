import React from "react";
import "./MovieCard.css";

const MovieCard = ({title, poster, id}) => {
  return (
    <div className="movie-card">
      <h3>{title}</h3>
      <p>{poster}</p>
      <button>BUTTON</button>
    </div>
  )
}

export default MovieCard;
