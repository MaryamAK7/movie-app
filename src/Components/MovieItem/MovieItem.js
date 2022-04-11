import React from "react";
import Card from "react-bootstrap/Card";
import star from './star.png';
import './MovieItem.css'

export default function MovieItem({ movie }) {
  return (
    <div className="movies">
      <Card className="bg-dark text-white">
        <Card.Img
          src={`https://image.tmdb.org/t/p/w200` + movie.poster_path}
          alt="image"
        />
         <Card.ImgOverlay className='card-overlay-item'>
          
          <Card.Title> {movie.title} </Card.Title>
          {/* <Card.Text> */}
          <div className = 'cardDesc'> 
            <div>{movie.release_date}</div>
            {/* </Card.Text> */}
          {/* <Card.Text> */}
            <div> {movie.vote_average} <img src={star} className='img-card' alt={movie.title}/> </div></div>
            {/* </Card.Text> */}
           
        </Card.ImgOverlay> 
      </Card>
    </div>
  );
}
