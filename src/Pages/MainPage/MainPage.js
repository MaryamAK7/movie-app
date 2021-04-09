import React, { useContext, useEffect } from "react";
import MovieGrid from "../../Components/MovieGrid/MovieGrid.js";
import { StateContext } from "../../Context/StateProvider.js";
import Spinner from "react-bootstrap/Spinner";
import "./MainPage.css";

export default function MainPage() {
  const [state, dispatch] = useContext(StateContext);

  
  useEffect(() =>{
    const fetching = async () => {
      const data = await (
        await fetch(
          `https://api.themoviedb.org/3//trending/movie/week?api_key=${atob(
            "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
          )}`
        )
      ).json();
      dispatch({ type: "SET_Movies", payload: data.results });
    }
    fetching();
    // eslint-disable-next-line
  },[])
  return (
    <div className="main">
      {state.movies.length === 0 ?  <Spinner animation="border" role="status" variant="success" className='search-spinner'></Spinner> : <MovieGrid />}    
    </div>
  );
}
