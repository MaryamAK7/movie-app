import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { StateContext } from "../../Context/StateProvider.js";
import Spinner from "react-bootstrap/Spinner";
import "./SingleMoviePage.css";

export default function SingleMoviePage() {
  const movieId = useParams();
  const [movie, setMovie] = useState([]);
  const [state] = useContext(StateContext);

  useEffect(() => {
    const res = state.movies.filter((mov) => mov.id === parseInt(movieId.id));
    setMovie(res);
  }, [state.movies, movieId]);
  return (
    <div className="single-movie-page">
      {movie.length === 0 ? (
        <Spinner
          animation="border"
          role="status"
          variant="danger"
          className="search-spinner"
        ></Spinner>
      ) : (
        <div className="single-movie-card">
          <img
            className="single-movie-image"
            src={`https://image.tmdb.org/t/p/w200` + movie[0].poster_path}
            alt="movie pic"
          />
          <div className='single-movie-info'>
            <h1 className="single-movie-title"> {movie[0].title} </h1>
            <div className="single-movie-desc"> <h5>Description</h5> {movie[0].overview} </div>
            <div className="single-movie-lang"> <span>Language:</span> {movie[0].original_language}</div>
            <div className="single-movie-date"><span>Release date:</span> {movie[0].release_date}</div>
            <div className="single-movie-vote"><span>Vote Average:</span> {movie[0].vote_average}</div>
            <div className="single-movie-voteCount"><span>Vote count:</span> {movie[0].vote_count}</div>
          </div>
        </div>
      )}
    </div>
  );
}
