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
  const constructionMenu = () => {
    // <div class="sub-nav">
    //   <div class="menu-project-page-menu-container">
    //     <ul id="project-pagemenu" class="menu">
    //       <li
    //         id="menu-item-5906"
    //         class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-5832 current_page_item menu-item-5906"
    //       >
    //         <a href="#" aria-current="page">
    //           Selected Projects
    //         </a>
    //       </li>
    //       <li
    //         id="menu-item-5915"
    //         class="menu-item menu-item-type-taxonomy menu-item-object-category_projects menu-item-5915"
    //       >
    //         <a href="#">Museums</a>
    //       </li>
    //       <li
    //         id="menu-item-5917"
    //         class="menu-item menu-item-type-taxonomy menu-item-object-category_projects menu-item-5917"
    //       >
    //         <a href="#">Performing Arts</a>
    //       </li>
    //     </ul>
    //   </div>
    // </div>;
  };

  return (
    <>
      <header className="mainheaderSec">
        <div className="menuwrap-parent">
          <div className="menuwrap">
            <a href="#" class="translation-link">
              <p class="translation-icon zhlang" data-no-translation>
        
              </p>
            </a>
            

            <Link id="show-hidden-menu" className="sha" to="/">
              <div
                style={{
                  width: "50px",
                  height: "30px",
                  backgroundImage: `url("assets/images/logo.png")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left center",
                }}
              ></div>
              INSPACE <i> atelier </i>
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

        <div class="sub-nav">
          <div class="menu-project-page-menu-container">
            <ul id="project-pagemenu" class="menu">
              <li
                id="menu-item-5906"
                class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-5832 current_page_item menu-item-5906"
              >
                <a href="#" aria-current="page">
                  Selected Projects
                </a>
              </li>
              <li
                id="menu-item-5915"
                class="menu-item menu-item-type-taxonomy menu-item-object-category_projects menu-item-5915"
              >
                <a href="#">Museums</a>
              </li>
              <li
                id="menu-item-5917"
                class="menu-item menu-item-type-taxonomy menu-item-object-category_projects menu-item-5917"
              >
                <a href="#">Performing Arts</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* <button onClick={constructionMenu}>Show alert</button>; */}

      <Navbar fixed="top" bg="light" expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand to="/">
              <img src="assets/images/logo.png" style={{ height: "30px" }} />
              INSPACE <i> atelier </i>
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
