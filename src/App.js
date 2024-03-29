import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer/Footer.js";
import NavBar from "./Components/NavBar/NavBar.js";
import MainPage from "./Pages/MainPage/MainPage.js";
import MoviePage from "./Pages/SingleMoviePage/SingleMoviePage.js";
import AboutPage from "./Pages/AboutPage/AboutPage.js";

import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="flex-container">
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/movie/:id">
            <MoviePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
