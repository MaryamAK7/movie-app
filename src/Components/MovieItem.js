import React from "react";

export default function MovieItem({ movie }) {
  return (
    <div className="movies">
      <h3> {movie.title} </h3>
      <img
        src={`https://image.tmdb.org/t/p/w200` + movie.poster_path}
        alt="Poster"
      />
      <span>{movie.release_date}</span>
      <span>{movie.vote_average}</span>
    </div>
  );
}
