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
      <div className="h-menu">
        <div className="table-responsive">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>People</td>
                <td> </td>
                <td>Internship </td>
                <td rowspan="2">Home</td>
                <td colspan="2">Product Design</td>
                <td></td>
                <td rowspan="2">Contact</td>
              </tr>
              <tr>
                <td></td>
                <td>Peoject </td>
                <td> </td>
                <td></td>
                <td></td>
                <td>Reserch</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* mobile menu */}

      {/* <Navbar fixed="top" bg="light" expand="lg">
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
      </Navbar> */}
    </>
  );
}
