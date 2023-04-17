import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useLocation } from "react-router-dom";

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

  // Active css on click

  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <>
      {/* menu  */}

      <div className="h-menu">
        <div className="table-responsive">
          <table className="table ">
            <tbody className="r-width">
              <tr>
                <td className={splitLocation[1] === "works" ? "active" : ""}>
                  <NavLink
                    
                    to="works"
                  >
                    Works
                  </NavLink>
                </td>
                <td className="fr-blank"> </td>
                <td className={splitLocation[1] === "pratice" ? "active" : ""}>
                  <NavLink  to="/pratice">
                    Pratice
                  </NavLink>
                </td>
                <td className="fr-blank2"></td>
                <td className="fr-blank3"></td>
              </tr>

              <tr>
                <td className="sr-blank"></td>
                <td className={splitLocation[1] === "people" ? "active" : ""}>
                  <Link className="sr-1" to="/people">
                    People
                  </Link>
                </td>
                <td className="sr-blank2"></td>
                <td
                  className={splitLocation[1] === "colleagues" ? "active" : ""}
                >
                  <Link className="sr-1" to="/colleagues">
                  Future Colleagues
                  </Link>
                </td>
                <td className={splitLocation[1] === "contact" ? "active" : ""}>
                  <Link className="sr-1" to="/contact">
                    Contact
                  </Link>
                </td>
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
                  // src="assets/images/logo.png"
                  src={`${MAIN_PATH}/images/${element.logo}`}
                  style={{ height: "30px" }}
                  alt="Logo"
                />
              </Link>
            </div>
          </>
        );
      })}

      {/* mobile menu */}
      {items.map((element, id) => {
        return (
          <>
            <div className="m-nav">
              <Navbar fixed="top" bg="light" expand="lg">
                <Container>
                  <Link to="/">
                    <Navbar.Brand to="/">
                      <img
                        className="m-logo"
                        // src="assets/images/logo.png"
                        src={`${MAIN_PATH}/images/${element.logo}`}
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
                        <NavLink
                          exact
                          activeClassName="active2"
                          className="fr-1"
                          to="/"
                        >
                          Home
                        </NavLink>
                      </Nav.Link>

                      <Nav.Link>
                        <NavLink
                          activeClassName="active2"
                          className="fr-1"
                          to="works"
                        >
                          Works
                        </NavLink>
                      </Nav.Link>

                      <Nav.Link>
                        <NavLink activeClassName="active2" to="/pratice">
                          Pratice
                        </NavLink>
                      </Nav.Link>

                      <Nav.Link>
                        <NavLink activeClassName="active2" to="/people">
                        People
                        </NavLink>
                      </Nav.Link>

                      <Nav.Link>
                        <NavLink activeClassName="active2" to="/colleagues">
                          Future Colleagues
                        </NavLink>
                      </Nav.Link>

                      {/* <Nav.Link> */}
                      <NavLink activeClassName="active2" to="/contact">
                      Contact
                      </NavLink>
                      {/* </Nav.Link> */}

                      {/* <NavDropdown title="Projects" id="navbarScrollingDropdown">
                  <NavDropdown.Item>
                    <Link to="design-projects">Design Projects</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="construction-projects">Construction Projects</Link>
                  </NavDropdown.Item>
                 </NavDropdown> */}
                    </Nav>

                    {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
          </>
        );
      })}
    </>
  );
}
