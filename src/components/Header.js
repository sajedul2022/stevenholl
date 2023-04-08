import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { API_PATH, MAIN_PATH } from "../API_PATH";

export default function Header() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${API_PATH}/basic-fe`)
      // fetch("https://inspace.bdprogrammers.com/admin/api/basic-fe")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <>
      {/* menu  */}

      <div className="h-menu">
        <div className="table-responsive">
          <table className="table ">
            <tbody className="r-width">
              <tr>
                <td className="fr-1" > <Link to="construction-projects">WORKS</Link></td>
                <td className="fr-blank" > </td>
                <td className="fr-2" >PRACTICE </td>
                <td className="fr-blank2" ></td>
                <td className="fr-blank3" ></td>
              </tr>

              <tr>
                <td className="sr-blank" ></td>
                <td className="sr-1" >PEOPLE </td>
                <td className="sr-blank2" ></td>
                <td className="sr-2">FUTURE COLLEAGUES</td>
                <td className="sr-3" >CONTACT</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {items.map((element, id) => {
        return (
          <>
            {/* logo */}
            <div className="h-logo">
              <Link id="show-hidden-menu" className="sha" to="/">
                <img
                  className="b-logo "
                  src="assets/images/logo.png"
                  // src={`${MAIN_PATH}/images/${item.logo}`}
                  style={{ height: "30px" }}
                  alt="Logo"
                />
              </Link>
            </div>

            {/* social  */}
            <div className="h-social">
              <ul className="social-icon">
                <li>
                  <Link to={element.facebook} target="_blank">
                    <img src="/assets/images/facebook.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to={element.instagram} target="_blank">
                    <img src="/assets/images/instagram.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to={element.instagram} target="_blank">
                    <img src="/assets/images/youtube.svg" alt="" />
                  </Link>
                </li>

                <li>
                  <Link to={element.instagram} target="_blank">
                    <img src="/assets/images/linkedin.svg" alt="" />
                  </Link>
                </li>
              </ul>
            </div>
          </>
        );
      })}

      {/* mobile menu */}

      <Navbar fixed="top" bg="light" expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand to="/">
              <img
                className="m-logo"
                src="assets/images/logo.png"
                style={{ height: "30px" }}
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
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
    </>
  );
}
