import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ title, poster, id}) => {
  return (
    <Link to={`/${id}`}>
      <div id={id} className="movie-card">
        <h3>{title}</h3>
        <img className="poster-img" src={poster} alt={title} />
      </div>
    </Link>
  )
}

export default MovieCard;
