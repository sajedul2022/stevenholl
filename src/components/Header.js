import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header class="mainheaderSec">
        <div class="menuwrap-parent">
          <div class="menuwrap">
            {/* <Link to="/" class="translation-link">
              <p class="translation-icon zhlang" data-no-translation>
                中文
              </p>
            </Link> */}
            <Link id="show-hidden-menu" class="sha" to="/">
              Steven Holl Architects
            </Link>

            <div class="menu-home-page-container">
              <ul id="homepagemenu" class="menu">
                <li
                  id="menu-item-5900"
                  class="world-map menu-item menu-item-type-post_type menu-item-object-page menu-item-5900"
                >
                  <Link to="studio-contact">Studio + Contact</Link>
                </li>
                <li
                  id="menu-item-5901"
                  class="all menu-item menu-item-type-post_type menu-item-object-page menu-item-5901"
                >
                  <Link to="ecological-resilience">
                    Design Projects
                  </Link>
                </li>
                <li
                  id="menu-item-5902"
                  class="arts menu-item menu-item-type-post_type menu-item-object-page menu-item-5902"
                >
                  <Link to="news">News + Events</Link>
                </li>
                <li
                  id="menu-item-5903"
                  class="educational menu-item menu-item-type-post_type menu-item-object-page menu-item-5903"
                >
                  <Link to="philosophy">Idea + Phenomena</Link>
                </li>
                <li
                  id="menu-item-5904"
                  class="museums menu-item menu-item-type-post_type menu-item-object-page menu-item-5904"
                >
                  <Link to="selected-projects">Construction  Projects </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      
    </>
  );
}
