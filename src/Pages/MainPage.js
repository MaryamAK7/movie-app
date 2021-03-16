import React, { useContext } from "react";
import MovieGrid from "../Components/MovieGrid";
import { StateContext } from "../Context/StateProvider.js";

export default function MainPage() {
  const [state, ] = useContext(StateContext);

  return (
    <div className="main">
      {state.movies.length === 0 ? <div>You are on the Main Page Search for a movie!</div> : <MovieGrid />}
    </div>
  );
}
