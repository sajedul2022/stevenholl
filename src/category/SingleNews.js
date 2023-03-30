import React from "react";
import { Link } from "react-router-dom";

export default function SingleNews() {
  return (
    <div>
      <div
        className="bgcommanSec"
        style={{ backgroundImage: `url("assets/images/uploads/1.jpg")` }}
      ></div>

      <div className="paragraph-section ">
        <div className="sub-paragraph">
          <article
            id="post-13275"
            className="post-13275 post type-post status-publish format-standard has-post-thumbnail hentry category-press-release"
          >
            <header className="entry-header">
              <h1 className="entry-title">
                <br />
                Daeyang Gallery and House featured in Architizer
              </h1>
              <div className="entry-meta">
                {/* <span className="authorsec"> | February 7, 2023</span> */}
              </div>
            </header>

            <div className="postimagegallery">
              <img src="assets/images/uploads/2.jpg" alt="img" />
            </div>

            <div className="entry-content">
              <div dir="ltr">
                <div className="WordSection1">
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

            <footer className="entry-footer"></footer>
          </article>
        </div>
        {/* <div className="sub-paragraph viewproject">
          <Link to="/single-project">VIEW PROJECT</Link>
        </div> */}
      </div>
    </div>
  );
}
