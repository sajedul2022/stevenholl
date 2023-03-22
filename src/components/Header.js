import React, { useState } from "react";
import { Link } from "react-router-dom";
import favicon from "../images/favicon.png";
import IMAGES from "../images/index.js";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Carousel from "react-bootstrap/Carousel";

export default function Header() {
  return (
    <>
      <header className="mainheaderSec">
        <div className="menuwrap-parent">
          <div className="menuwrap">
            <a href="#" className="translation-link">
              <p className="translation-icon zhlang" data-no-translation></p>
            </a>

            <Link id="show-hidden-menu" className="sha" to="/">
              
              <img className="b-logo " src="assets/images/logo.png" style={{ height: "30px" }} />
               
            </Link>

            <div className="menu-home-page-container">
              <ul id="homepagemenu" className="menu">
                <li
                  id="menu-item-5900"
                  className="world-map menu-item menu-item-type-post_type menu-item-object-page menu-item-5900"
                >
                  <Link to="studio-contact">Contact</Link>
                </li>
                <li
                  id="menu-item-5901"
                  className="all menu-item menu-item-type-post_type menu-item-object-page menu-item-5901"
                >
                  <Link to="design-projects">Design Projects</Link>
                </li>
                <li
                  id="menu-item-5902"
                  className="arts menu-item menu-item-type-post_type menu-item-object-page menu-item-5902"
                >
                  <Link to="news">News & Events</Link>
                </li>
                <li
                  id="menu-item-5903"
                  className="educational menu-item menu-item-type-post_type menu-item-object-page menu-item-5903"
                >
                  <Link to="idea">Idea </Link>
                </li>
                <li
                  id="menu-item-5904"
                  className="museums menu-item menu-item-type-post_type menu-item-object-page menu-item-5904"
                >
                  <Link to="construction-projects">Construction Projects</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

     

      <Navbar fixed="top" bg="light" expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand to="/">
              <img className="m-logo" src="assets/images/logo.png" style={{ height: "30px" }} />
              {/* INSPACE <i> atelier </i> */}
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* <Nav.Link to="studio-contact"> </Nav.Link> */}
              <Nav.Link>
                {" "}
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link to="studio-contact">Contact</Link>{" "}
              </Nav.Link>
              <NavDropdown title="Projects" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <Link to="design-projects">Design Projects</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="construction-projects">Construction Projects</Link>
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
              </NavDropdown>
              <Nav.Link>
                {" "}
                <Link to="news">News & Events</Link>{" "}
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link to="idea">Idea </Link>{" "}
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* </div> */}
    </>
  );
}
