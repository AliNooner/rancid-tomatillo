import React from "react";
import MovieCard from "./MovieCard";
import "./Movies.css";


const Movies = ({ movies }) => {
  const movieCards = movies.map(movie => {
    return (
      <MovieCard
        title={movie.title}
        poster={movie.poster_path}
        id={movie.id}
        key={movie.id}
      />
    )
  })

  return (
    <div className="movie-container">
      {movieCards}
      </div>
  )
}

export default Movies;
