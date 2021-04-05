import React from "react";
import "./App.css";
import Footer from "./Components/Footer.js";
import NavBar from "./Components/NavBar/NavBar.js";
import SideBar from "./Components/SideBar/SideBar.js";
import MainPage from "./Pages/MainPage/MainPage.js";
import MoviePage from "./Pages/MoviePage/MoviePage.js";
import AboutPage from "./Pages/AboutPage/AboutPage";

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
