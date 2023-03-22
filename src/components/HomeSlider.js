import React from "react";

export default function HomeSlider() {
  return (
    <>
      <div className="fullscreenslider">
        <div className="owl-carousel owl-theme">
          <div
            className="item"
            style={{ backgroundImage: `url("assets/images/uploads/1.jpg")` }}
          >
            <h2>
              <a href="#">
                INSPACE <i> atelier </i> Architects and Nagata Acoustics
                designed the 1300-seat concert hall for Ostrava’s Janáček
                Philharmonic Orchestra as a vineyard type plan with the highest
                acoustic standards and projection capabilities.
              </a>
            </h2>
          </div>
          <div
            className="item"
            style={{ backgroundImage: `url("assets/images/uploads/2.jpg")` }}
          >
            <h2>
              <a href="#">
                INSPACE <i> atelier </i> Architects and Nagata Acoustics
                designed the 1300-seat concert hall for Ostrava’s Janáček
                Philharmonic Orchestra as a vineyard type plan with the highest
                acoustic standards and projection capabilities.
              </a>
            </h2>
          </div>

          <div
            className="item"
            style={{ backgroundImage: `url("assets/images/uploads/3.jpg")` }}
          >
            <h2>
              <a href="#">
                {" "}
                INSPACE <i> atelier </i> Architects and Nagata Acoustics
                designed the 1300-seat concert hall for Ostrava’s Janáček
                Philharmonic Orchestra as a vineyard type plan with the highest
                acoustic standards and projection capabilities.
              </a>
            </h2>
          </div>
          <div
            className="item"
            style={{ backgroundImage: `url("assets/images/uploads/4.jpg")` }}
          >
            <h2>
              <a href="#">
                INSPACE <i> atelier </i> Architects and Nagata Acoustics
                designed the 1300-seat concert hall for Ostrava’s Janáček
                Philharmonic Orchestra as a vineyard type plan with the highest
                acoustic standards and projection capabilities.
              </a>
            </h2>
          </div>
        </div>
      </div>

      
      
    </>
  );
}
