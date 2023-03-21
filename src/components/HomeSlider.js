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

      {/* <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="assets/images/uploads/1.jpg"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="assets/images/uploads/2.jpg"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="assets/images/uploads/3.jpg" alt="Third slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div> */}
      
    </>
  );
}
