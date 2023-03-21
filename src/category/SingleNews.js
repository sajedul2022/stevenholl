import React from "react";
import { Link } from "react-router-dom";

export default function SingleNews() {
  return (
    <div>
      <div
        className="bgcommanSec"
        style={{ backgroundImage: `url("assets/images/uploads/1.jpg")` }}
      ></div>

      <div class="paragraph-section news-detail">
        <div class="sub-paragraph">
          <article
            id="post-13275"
            class="post-13275 post type-post status-publish format-standard has-post-thumbnail hentry category-press-release"
          >
            <header class="entry-header">
              <h1 class="entry-title">
                <br />
                Daeyang Gallery and House featured in Architizer
              </h1>
              <div class="entry-meta">
                <span class="authorsec"> | February 7, 2023</span>
              </div>
            </header>

            <div class="postimagegallery">
              <img src="assets/images/uploads/2.jpg" alt="img" />
            </div>

            <div class="entry-content">
              <div dir="ltr">
                <div class="WordSection1">
                  <p>
                    <em>
                      Daeyang Gallery and House featured in Architizer’s latest
                      article, “How One of the World’s Top Engineering and
                      Fabrication Firms Designs With Architects&#8221;
                    </em>
                  </p>
                </div>
              </div>
            </div>

            <footer class="entry-footer"></footer>
          </article>
        </div>
        <div class="sub-paragraph viewproject">
          <Link to="/single-project">VIEW PROJECT</Link>
        </div>
      </div>
    </div>
  );
}
