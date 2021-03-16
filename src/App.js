import React from "react";
import "./App.css";
import Footer from "./Components/Footer.js";
import NavBar from "./Components/NavBar.js";
import SideBar from "./Components/SideBar.js";
import MainPage from "./Pages/MainPage.js";
import MoviePage from "./Pages/MoviePage.js";
import AboutPage from "./Pages/AboutPage";

import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="flex-container">
          <SideBar />
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/movie/:id">
            <MoviePage />
          </Route>
          <Route path="/about/">
            <AboutPage />
          </Route>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
