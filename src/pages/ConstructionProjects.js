import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

export default function ConstructionProjects() {
  return (
    <div className="constProject">

      {/* <div class="fullscreenslider">
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/images/uploads/4.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/images/uploads/2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/images/uploads/3.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div> */}

      <div
        className="bgcommanSec fullscreenslider"
        style={{ backgroundImage: `url("assets/images/uploads/2.jpg")` }} 
      ></div>

      <header className="mainheaderSec">
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
                <Link to="/museums">Museums</Link>
              </li>
              <li
                id="menu-item-5917"
                class="menu-item menu-item-type-taxonomy menu-item-object-category_projects menu-item-5917"
              >
                <a href="#">Performing Arts</a>
              </li>

              <li
                id="menu-item-5915"
                class="menu-item menu-item-type-taxonomy menu-item-object-category_projects menu-item-5915"
              >
                <a href="#">House</a>
              </li>
              <li
                id="menu-item-5917"
                class="menu-item menu-item-type-taxonomy menu-item-object-category_projects menu-item-5917"
              >
                <a href="#">Performing Arts</a>
              </li>
              <li
                id="menu-item-5915"
                class="menu-item menu-item-type-taxonomy menu-item-object-category_projects menu-item-5915"
              >
                <a href="#">Clubs</a>
              </li>
              <li
                id="menu-item-5917"
                class="menu-item menu-item-type-taxonomy menu-item-object-category_projects menu-item-5917"
              >
                <a href="#"> Arts</a>
              </li>
              <li
                id="menu-item-5915"
                class="menu-item menu-item-type-taxonomy menu-item-object-category_projects menu-item-5915"
              >
                <a href="#">Hall Room</a>
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

      <div className="paragraph-section">
        <div className="sub-paragraph">
          <h1>Construction Projects</h1>
        </div>

        <div class="SelectedProjectsSec">
          <div class="newbox sub-paragraph">
            <div class="titleSec">
              <h2>
                <Link to="/single-project">
                  NANCY AND RICH KINDER MUSEUM BUILDING, MUSEUM OF FINE ARTS
                  HOUSTON (MFAH)
                </Link>
              </h2>
            </div>
            <div class="img-wrap">
              <Link to="/single-project">
                <img
                  src="assets/images/uploads/3.jpg"
                  alt="NANCY AND RICH KINDER MUSEUM BUILDING, MUSEUM OF FINE ARTS HOUSTON (MFAH)"
                />
              </Link>
            </div>
          </div>

          <div class="newbox sub-paragraph">
            <div class="titleSec">
              <h2>
                <Link to="/single-project">RUBENSTEIN COMMONS, INSTITUTE FOR ADVANCED STUDY</Link>
              </h2>
            </div>
            <div class="img-wrap">
              <Link to="/single-project">
                <img
                  src="assets/images/uploads/2.jpg"
                  alt="RUBENSTEIN COMMONS, INSTITUTE FOR ADVANCED STUDY"
                />
              </Link>
            </div>
          </div>

          <div class="newbox sub-paragraph">
            <div class="titleSec">
              <h2>
                <Link to="/single-project">&#8216;Z&#8217; Space Interior Design</Link>
              </h2>
            </div>
            <div class="img-wrap">
              <Link to="/single-project">
                <img
                  src="assets/images/uploads/2.jpg"
                  alt="&#8216;Z&#8217; Space"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
