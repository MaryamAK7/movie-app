import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { StateContext } from "../../Context/StateProvider";
import { ConstructURL } from "../ConstructURL";
import { useHistory } from "react-router-dom";
import './SearchBox.css';

export default function SearchBox() {
  const [searchVal, setSearchVal] = useState("");
  const [, dispatch] = useContext(StateContext);
  const [noRes, setNoRes] = useState("");
  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    history.push('/');
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
    } else {setNoRes(""); dispatch({ type: "SET_title", payload: searchVal }); }
  };

  return ( <div className="searchPlusRes">
    <div className="searchBox">
       
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
