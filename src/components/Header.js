import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="mainheaderSec">
        <div className="menuwrap-parent">
          <div className="menuwrap">
            {/* <Link to="/" className="translation-link">
              <p className="translation-icon zhlang" data-no-translation>
                中文
              </p>
            </Link> */}
            <Link id="show-hidden-menu" className="sha" to="/">
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
                  <Link to="design-projects">
                    Design Projects
                  </Link>
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
                  <Link to="construction-projects">Construction  Projects </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      
    </>
  );
}
