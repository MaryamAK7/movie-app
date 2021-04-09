import React, { useState, useContext } from "react";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { StateContext } from "../../Context/StateProvider";
import { ConstructURL } from "../ConstructURL";
import './SearchBox.css';

export default function SearchBox() {
  const [searchVal, setSearchVal] = useState("");
  const [, dispatch] = useContext(StateContext);

  function handleSubmit(e) {
    e.preventDefault();
    fetchMovies(searchVal);
    setSearchVal("");
  }
  const fetchMovies = async (searchVal) => {
    const { results } = await (
      await fetch(ConstructURL("search/movie", searchVal))
    ).json();
    dispatch({ type: "SET_Movies", payload: results });
  };

  return (
    <div className="searchBox">
       {searchVal.length === 0 ? (
          ""
        ) : (
          <Spinner animation="border" role="status" variant="success" className='search-spinner'></Spinner>
        )}
      <Form onSubmit={handleSubmit} className='search-form'>
        <Form.Control
          type="text"
          placeholder="Search for a movie.."
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          required
        />
        <Button variant="success" type="submit" className='search-btn'>
          Search
        </Button>
      </Form>
    </div>
  );
}
