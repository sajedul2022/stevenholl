import React from "react";
import { Link } from "react-router-dom";

export default function NewsEvents() {
  return (
    <>
      <div className="bgcommanSec" style={{backgroundImage: `url("assets/images/uploads/1.jpg")`}}></div>

      {/* <div className="paragraph-section">
        <div className="sub-paragraph">
          <h1>News & Events</h1>
          <p>Upcomming...</p>
        </div>
      </div> */}


      <div className="bgcommanSec"></div>
      <div className="paragraph-section news_page">
      <div className="sub-paragraph">
          <h1>News & Events</h1>
          
        </div>

        <div className="font_13">

          <div className="newsListSec" id="aajax-posts">
            <div className="newbox sub-paragraph">
              <div className="img-wrap">
                <Link to="/single-news">
                  <div className="img">
                  <img
                  src="assets/images/uploads/3.jpg"
                  alt="NANCY AND RICH KINDER MUSEUM BUILDING, MUSEUM OF FINE ARTS HOUSTON (MFAH)"
                />
                  </div>
                </Link>
              </div>
              <div className="content-wrap">
                <div className="metasec">March 16, 2023 </div>
                <h2>
                  <Link to="/single-news">Ex of IN House Top Ten Airbnbs</Link>
                </h2>
                <p className="news-content">
                  Forbes selected the Ex of IN House among the top ten Airbnbs
                  in the United States. “Natural light comes streaming through
                  skylights and shadow play abounds… Holl wants to change the
                  way we live by creating structures that are efficient...
                  <Link to="/single-news">more</Link>
                </p>
              </div>
            </div>
          </div>

          <div className="newsListSec" id="aajax-posts">
            <div className="newbox sub-paragraph">
              <div className="img-wrap">
                <Link to="/single-news">
                  <div className="img">
                  <img
                  src="assets/images/uploads/4.jpg"
                  alt="NANCY AND RICH KINDER MUSEUM BUILDING, MUSEUM OF FINE ARTS HOUSTON (MFAH)"
                />
                  </div>
                </Link>
              </div>
              <div className="content-wrap">
                <div className="metasec">March 16, 2023 </div>
                <h2>
                  <Link to="/single-news">Ex of IN House Top Ten Airbnbs</Link>
                </h2>
                <p className="news-content">
                  Forbes selected the Ex of IN House among the top ten Airbnbs
                  in the United States. “Natural light comes streaming through
                  skylights and shadow play abounds… Holl wants to change the
                  way we live by creating structures that are efficient...
                  <Link to="/single-news">more</Link>
                </p>
              </div>
            </div>
          </div>

          <div className="newsListSec" id="aajax-posts">
            <div className="newbox sub-paragraph">
              <div className="img-wrap">
                <Link to="/single-news">
                  <div className="img">
                  <img
                  src="assets/images/uploads/2.jpg"
                  alt="NANCY AND RICH KINDER MUSEUM BUILDING, MUSEUM OF FINE ARTS HOUSTON (MFAH)"
                />
                  </div>
                </Link>
              </div>
              <div className="content-wrap">
                <div className="metasec">March 16, 2023 </div>
                <h2>
                  <Link to="/single-news">Ex of IN House Top Ten Airbnbs</Link>
                </h2>
                <p className="news-content">
                  Forbes selected the Ex of IN House among the top ten Airbnbs
                  in the United States. “Natural light comes streaming through
                  skylights and shadow play abounds… Holl wants to change the
                  way we live by creating structures that are efficient...
                  <Link to="/single-news">more</Link>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
