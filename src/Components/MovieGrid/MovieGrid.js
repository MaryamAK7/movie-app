import React, { useContext } from "react";
import { StateContext } from "../../Context/StateProvider.js";
import MovieItem from "../MovieItem/MovieItem.js";
import { Link } from "react-router-dom";
import './MovieGrid.css'
export default function MovieGrid() {
  const [state] = useContext(StateContext);

  return (
    <div >
      <h1 className='movie-grid-title'>Choose your movie</h1>
      <div className="moviesGrid"> 
      {state.movies.map((movie) => {
        console.log(movie);
        return (
          <Link to={`/movie/${movie.id}`}>
            <MovieItem movie={movie} />
          </Link>
        );
      })}
      </div>
    </div>
  );
}