import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

export default function Museums() {
  return (
    <div className="museums">
      {/* <div className="bgcommanSec fullscreenslider" style={{ backgroundImage: `url("assets/images/uploads/3.jpg")` }}> 
      </div> */}

      <div class="fullscreenslider">
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
      </div>

      <header className="mainheaderSec">
        <div className="sub-nav">
          <div className="menu-project-page-menu-container">
            <ul id="project-pagemenu" className="menu">
              <li
                id="menu-item-5906"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5906"
              >
                <a href="#">Selected Projects</a>
              </li>
              <li
                id="menu-item-5915"
                className="menu-item menu-item-type-taxonomy menu-item-object-category_projects current-menu-item menu-item-5915"
              >
                <Link to="" aria-current="page">
                  Museums
                </Link>
              </li>
              <li
                id="menu-item-5917"
                className="menu-item menu-item-type-taxonomy menu-item-object-category_projects menu-item-5917"
              >
                <Link to="#">Performing Arts</Link>
              </li>
              <li
                id="menu-item-5912"
                className="menu-item menu-item-type-taxonomy menu-item-object-category_projects menu-item-5912"
              >
                <a href="#">Housing</a>
              </li>
              <li
                id="menu-item-5907"
                className="menu-item menu-item-type-taxonomy menu-item-object-category_projects menu-item-5907"
              >
                <a href="">Educational + Campus Works</a>
              </li>
              <li
                id="menu-item-5916"
                className="menu-item menu-item-type-taxonomy menu-item-object-category_projects menu-item-5916"
              >
                <a href="">Office + Hybrid Towers</a>
              </li>
              <li
                id="menu-item-5913"
                className="menu-item menu-item-type-taxonomy menu-item-object-category_projects menu-item-5913"
              >
                <a href="">Libraries</a>
              </li>
              <li
                id="menu-item-5911"
                className="menu-item menu-item-type-taxonomy menu-item-object-category_projects menu-item-5911"
              >
                <a href="">Houses</a>
              </li>
              <li
                id="menu-item-5918"
                className="menu-item menu-item-type-taxonomy menu-item-object-category_projects menu-item-5918"
              >
                <a href="">Religious Works</a>
              </li>
              <li
                id="menu-item-5910"
                className="menu-item menu-item-type-taxonomy menu-item-object-category_projects menu-item-5910"
              >
                <a href="">Hotel + Retail</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div className="paragraph-section project_page qqq">
        <div className="SelectedProjectsSec">
          <div className="newbox sub-paragraph">
            <div className="titleSec">
              <h2>
                <Link to="/single-project">
                  NANCY AND RICH KINDER MUSEUM BUILDING, MUSEUM OF FINE ARTS
                  HOUSTON (MFAH)
                </Link>
              </h2>
            </div>
            <div className="img-wrap">
            <Link to="/single-project">
                <img
                  src="assets/images/uploads/4.jpg"
                  alt="NANCY AND RICH KINDER MUSEUM BUILDING, MUSEUM OF FINE ARTS HOUSTON (MFAH)"
                />
              </Link>
            </div>
          </div>

          <div className="newbox sub-paragraph">
            <div className="titleSec">
              <h2>
                <Link to="/single-project" > INSTITUTE FOR CONTEMPORARY ART, VCU</Link>
              </h2>
            </div>
            <div className="img-wrap">
              <Link to="/single-project">
                <img
                  src="assets/images/uploads/2.jpg"
                  alt="INSTITUTE FOR CONTEMPORARY ART, VCU"
                />
              </Link>
            </div>
          </div>

          <nav className="navigation posts-navigation" aria-label="Posts">
            <h2 className="screen-reader-text">Posts navigation</h2>
            <div className="nav-links">
              <div className="nav-previous">
                <a href="#">Older posts</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
