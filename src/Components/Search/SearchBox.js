import React, { useState, useContext } from "react";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { StateContext } from "../../Context/StateProvider";
import { ConstructURL } from "../ConstructURL";

export default function SearchBox() {
  let [searchVal, setSearchVal] = useState("");
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
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          placeholder="Search for a movie.."
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          required
        />
        <Button variant="primary" type="submit">
          Search
        </Button>
        {searchVal.length === 0 ? (
          ""
        ) : (
          <Spinner animation="border" role="status" variant="primary"></Spinner>
        )}
      </Form>
    </div>
  );
}
