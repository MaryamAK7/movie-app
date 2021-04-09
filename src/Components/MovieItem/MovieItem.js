import React from "react";
import Card from "react-bootstrap/Card";
import './MovieItem.css'

export default function MovieItem({ movie }) {
  return (
    <div className="movies">
      <Card className="bg-dark text-white">
        <Card.Img
          src={`https://image.tmdb.org/t/p/w200` + movie.poster_path}
          alt="image"
        />
        {/* <Card.ImgOverlay className='card-overlay-item'>
          <Card.Title> {movie.title} </Card.Title>
          <Card.Text>{movie.release_date}</Card.Text>
          <Card.Text>{movie.vote_average} <img src={star} className='img-card'/></Card.Text>
        </Card.ImgOverlay> */}
      </Card>
    </div>
  );
}
