import React from "react";
import "./AboutPage.css";
import pop from './popcorn.png';

export default function AboutPage() {
  return (
    <div className="AboutPage">
      <img src={pop} alt='' className="aboutImg"/>
      <div className="about">
        The Movie App allows you to check the trending movies daily! You can
        also search for any specific movie. <br /> It's build using the Movie
        database Api.
        <br />
        <div className="aboutDesc">Languages used : HTML, React, CSS </div>
        <div className="enjoyAbout"> Enjoy! </div>
      </div>
    </div>
  );
}
