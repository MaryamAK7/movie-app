import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "../Components/SearchBox.js";
export default function NavBar() {
  return (
    <div className="navbar">
      <div className="navigate">
        <Link to="/">Home</Link>
        <Link to="/about/"> About</Link>
      </div>
      <div className="searchBox">
        <SearchBox />
      </div>
    </div>
  );
}
