import React from "react";
import SearchBox from "../Search/SearchBox.js";
import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import popcorn from './popcorn.png'

export default function NavBar() {
  return (
    <div className="navbar">
      <Navbar className='navbar-movie' expand="lg">
        <Navbar.Brand href="/"><img src={popcorn} className='logo' alt='logo' />Movie App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about/">About</Nav.Link>
          </Nav>
          <div inline>
            <SearchBox />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
