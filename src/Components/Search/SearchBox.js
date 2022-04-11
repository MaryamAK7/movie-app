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
  const [noRes, setNoRes] = useState("");
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
    
    if(results.length === 0 ){
      setNoRes('No Results Found! Try something else :)')
    const{results} = await (
      await fetch(
        `https://api.themoviedb.org/3//trending/movie/week?api_key=${atob(
          "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
        )}`
      )
    ).json();
    dispatch({type: "SET_Movies", payload : results});
    } else setNoRes("")
  };

  return ( <div className="searchPlusRes">
    <div className="searchBox">
       {searchVal.length === 0 ? (
          ""
        ) : (
          <Spinner animation="border" role="status" variant="light" className='search-spinner'></Spinner>
        )}
      <Form onSubmit={handleSubmit} className='search-form'>
        <Form.Control
          type="text"
          placeholder="Search for a movie.."
          value={searchVal}
          onChange={(e) => {setSearchVal(e.target.value);}}
          required
        />
        <Button variant="success" type="submit" className='search-btn'>
          Search
        </Button>
      </Form>
    </div>
    <div className="noResFound"> 
          {noRes}
      </div>
    </div>
  );
}
