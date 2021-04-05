import React, { useContext } from "react";
import { StateContext } from "../../Context/StateProvider.js";
import MovieItem from "../MovieItem/MovieItem.js";
import { Link } from "react-router-dom";

export default function MovieGrid() {
  const [state] = useContext(StateContext);

  return (
    <div className="moviesGrid">
      {state.movies.map((movie) => {
        console.log(movie);
        return (
          <Link to={`/movie/${movie.id}`}>
            <MovieItem movie={movie} />
            );
          </Link>
        );
      })}
    </div>
  );
}