import React, { useContext } from "react";
import { StateContext } from "../../Context/StateProvider.js";
import Dropdown from "react-bootstrap/Dropdown";
import Spinner from "react-bootstrap/Spinner";
import './GenreItems.css';

export default function GenreItems() {
  const [state, dispatch] = useContext(StateContext);

  const fetchGenres = async () => {
    const { genres } = await (
      await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=d2fa7ad1e26af0847d349d7dbd5f93e5&language=en-US"
      )
    ).json();

    dispatch({ type: "SET_Genres", payload: genres });
  };

  const handleClick = async (id) => {
    const data = await (
      await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=d2fa7ad1e26af0847d349d7dbd5f93e5&language=en-US&with_genres=${id}&page=1`
      )
    ).json();
    dispatch({ type: "SET_Movies", payload: data.results });
  };

  return (
    <div>
      <Dropdown onClick={fetchGenres} className="dropdown">
        <Dropdown.Toggle variant="success" id="dropdown-basic" className='drop-genre'>
          Genres
        </Dropdown.Toggle>
        <Dropdown.Menu>
        {state.genres.length !== 0 ? (
          ""
        ) : (
          <Spinner animation="border" role="status" variant="dark" className='search-spinner'></Spinner>
        )}
          {state.genres.map((genre) => {
            return (
              <Dropdown.Item
                key={genre.id}
                onClick={() => handleClick(genre.id)}
              >
                {genre.name}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
