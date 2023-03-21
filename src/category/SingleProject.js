import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

export default function SingleProject() {
  return (
    <div>
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
        <div class="menuwrap-parent">
          <div class="projectDetailSec">
            <div class="title_module">
              <h1>
                NANCY AND RICH KINDER MUSEUM BUILDING, MUSEUM OF FINE ARTS
                HOUSTON (MFAH)
              </h1>
              <p>Gulshan Dhaka. 2023 </p>
            </div>

            <div class="togglelistSec">
              <div class="togglelist">
                <h2 class="toggle">
                  Description{" "}
                  <span class="toggle__plus">
                    <strong>+</strong>
                  </span>
                </h2>
                <div class="innerContentSec">
                  <div class="topSec">
                    <p>
                      PROGRAM: museum addition with exhibition space, galleries,
                      seven garden courtyards, 215-seat theater, two pedestrian
                      tunnels, parking arrival hall, conference rooms,
                      restaurant overlooking sculpture garden, café, and a
                      triple-story Forum
                    </p>
                    <p>CLIENT: Museum of Fine Arts, Houston</p>
                    <p>SIZE: 237,213 sf</p>
                    <p>STATUS: Complete</p>
                  </div>
                  <div class="details">
                    <p>
                      The new museum architecture of the Nancy and Rich Kinder
                      Building is characterized by porosity, opening the ground
                      floor at all elevations. Seven gardens slice the
                      perimeter, marking points of entry and punctuating the
                      elevations. The largest garden court, at the corner of
                      Bissonnet and Main Street, marks a central entry point on
                      the new campus. When standing in the great new entrance
                      lobby of the Kinder Building, one can see gardens in four
                      directions and feel the inviting energy of a new sense of
                      openness to the community.
                    </p>
                    <p>
                      The new ground level is an activated social space open to
                      the community with longer hours than the two gallery
                      floors above. A fine restaurant opens to the Cullen
                      Sculpture Garden, a café to Bissonnet, and galleries open
                      to Main Street. Special performances might take place in
                      the Brown Foundation Plaza and Glassell rooftop garden.
                    </p>
                    <p>
                      The Texas sky opens 180°overhead above a luminous canopy
                      covering the new building. Concave curves, imagined from
                      cloud circles, push down on the roof geometry, allowing
                      natural light to slip in with precise measure and quality,
                      perfect for top-lit galleries. The undersides of the
                      curved ceiling become light reflectors, catching and
                      sliding the light across each unique gallery experience.
                      These curved slices of light shape the gallery spaces
                      organically in a unique way related to the organic
                      qualities of the lush vegetation and water characterizing
                      the new campus. Rather than mechanical and repetitive, the
                      light is organic and flowing echoing the movement of the
                      galleries.
                    </p>
                    <p>
                      Organized horizontally on two levels, all galleries have
                      natural light and are flexible with open flow. The gallery
                      rooms of ideal proportions are centered around an open
                      forum. The open flow through galleries is punctuated by
                      views into the seven gardens with green trellises offering
                      shade from glare. The central gallery forum provides
                      generous spaces for the exhibition of art and vertical
                      circulation to the upper floors. A stepped ramp and
                      elevators link the lobby and gallery levels for direct
                      access to all galleries.
                    </p>
                    <p>
                      Within the horizontal collection of stone (1924), steel
                      and glass (1958, 1974), and stone (2000), the Kinder
                      Building adds a horizontal architecture in translucent
                      glass. The curved glass elements have a soft texture,
                      alabaster-like. At night the glowing translucent walls
                      will be reflected in the water gardens and provide an open
                      invitation to enter the museum. In complementary/contrast,
                      the Kinder Building provides a strong contribution to the
                      existing unique collection of the Museum of Fine Arts
                      Houston architecture.
                    </p>
                    <p>
                      To see more about the Museum of Fine Arts Campus Expansion
                      visit the project page 
                      <a href="../museum-of-fine-arts-houston/index.html">
                        here.
                      </a>
                    </p>
                    <p>
                      To see more about the Glassell School of Art, completed in
                      2018, as a part of the Museum of Fine Arts Campus
                      Expansion visit the project page 
                      <a href="../glassell-school-of-art/index.html">here.</a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="togglelist">
                <h2 class="toggle">
                  Ecological Innovation{" "}
                  <span class="toggle__plus">
                    <strong>+</strong>
                  </span>
                </h2>
                <div class="innerContentSec">
                  <p>
                    &#8211; LEED Silver
                    <br />
                    &#8211; &#8220;cold jacket&#8221; of glass tubes reduces
                    solar gain by 70%
                    <br />
                    &#8211; natural light to all spaces
                    <br />
                    &#8211; displacement ventilation
                    <br />
                    &#8211; shaded loggias at grade
                    <br />
                    &#8211; sited to preserve all Live Oak trees
                  </p>
                </div>
              </div>
              <div class="togglelist">
                <h2 class="toggle">
                  Videos{" "}
                  <span class="toggle__plus">
                    <strong>+</strong>
                  </span>
                </h2>
                <div class="innerContentSec">
                  <ul>
                    <li>
                      <iframe
                        src="https://www.cbsnews.com/video/the-luminist-architecture-of-steven-holl/"
                        height="200"
                        allowfullscreen
                      ></iframe>
                      <strong>
                        CBC Sunday Morning, The "luminist architecture" of
                        Steven Holl
                      </strong>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="togglelist">
                <h2 class="toggle">
                  Credits{" "}
                  <span class="toggle__plus">
                    <strong>+</strong>
                  </span>
                </h2>
                <div class="innerContentSec">
                  <ul class="lrspace">
                    <li>
                      <p>
                        <strong>architect</strong>
                      </p>
                      <div class="credit-list">
                        <p>- Steven Holl Architects</p>
                        <p></p>

                        <p>Steven Holl (principal)</p>

                        <p></p>

                        <p>Chris McVoy (design architect)</p>

                        <p></p>

                        <p>Olaf Schmidt (senior associate)</p>

                        <p></p>

                        <p>Filipe Taboada (project architect)</p>

                        <p></p>

                        <p>
                          Rychiee Espinosa, Yiqing Zhao, Lourenzo Amaro de
                          Oliveira, Garrick Ambrose, Xi Chen, Carolina Cohen
                          Freue, JongSeo Lee, Vahe Markosian, Elise Riley,
                          Christopher Rotman, Yun Shi, Alfonso Simelio, Dimitra
                          Tsachrelia, Yasmin Vobis, Yiqing Zhao (project team)
                        </p>
                      </div>
                    </li>
                    <li>
                      <p>
                        <strong>associate architects</strong>
                      </p>
                      <div class="credit-list">
                        <p>- Kendall / Heaton Associates</p>
                      </div>
                    </li>
                    <li>
                      <p>
                        <strong>project manager</strong>
                      </p>
                      <div class="credit-list">
                        <p>- Legends</p>
                      </div>
                    </li>
                    <li>
                      <p>
                        <strong>structural engineers</strong>
                      </p>
                      <div class="credit-list">
                        <p>- Guy Nordenson & Associates</p>
                      </div>
                      <div class="credit-list">
                        <p>- Cardno Haynes Whaley</p>
                      </div>
                    </li>
                    <li>
                      <p>
                        <strong>MEP engineer</strong>
                      </p>
                      <div class="credit-list">
                        <p>- ICOR</p>
                      </div>
                    </li>
                    <li>
                      <p>
                        <strong>climate engineers</strong>
                      </p>
                      <div class="credit-list">
                        <p>- Transsolar</p>
                      </div>
                    </li>
                    <li>
                      <p>
                        <strong>lighting consultant</strong>
                      </p>
                      <div class="credit-list">
                        <p>- L'Observetoire International</p>
                      </div>
                    </li>
                    <li>
                      <p>
                        <strong>cost estimator</strong>
                      </p>
                      <div class="credit-list">
                        <p>- Venue Cost Consultants</p>
                      </div>
                    </li>
                    <li>
                      <p>
                        <strong>facade consultant</strong>
                      </p>
                      <div class="credit-list">
                        <p>- Knippers Helbig</p>
                      </div>
                    </li>
                    <li>
                      <p>
                        <strong></strong>
                      </p>
                      <div class="credit-list">
                        <p></p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="togglelist">
                <h2 class="toggle">
                  Quotes{" "}
                  <span class="toggle__plus">
                    <strong>+</strong>
                  </span>
                </h2>
                <div class="innerContentSec">
                  <hr class="line210" />
                  <ul>
                    <li>
                      <strong>
                        Michael J. Lewis, The Wall Street Journal, November 21,
                        2020
                      </strong>
                      “As a place for viewing art, and in terms of sheer
                      sensational impact, the Kinder is a triumph. It is
                      impressive by day or night, adroitly integrated into its
                      site, and—best of all—designed with special consideration
                      for the ease and comfort of its users.”
                    </li>
                    <li>
                      <strong>
                        Gary Tinterow, Director of MFAH, September 2020
                      </strong>{" "}
                      "In the dynamic spaces that Steven Holl Architects has
                      designed for the Nancy and Rich Kinder Building, our
                      distinctive holdings of modern and contemporary art will
                      soon have the showcase they deserve."
                    </li>
                    <li>
                      <strong>
                        Natilee Harren, "Better Faster, Stronger, Kinder" Art
                        Forum, December 17, 2020
                      </strong>{" "}
                      "The gaps between the curved planes let in just the right
                      amount of soft radiance, a theme carried throughout the
                      building’s lighting concept, which for the most part
                      achieves a warm elegance."
                    </li>
                    <li>
                      <strong>
                        Jack Murphy, "A Beautiful Series of Tubes" Rice Design
                        Alliance, November 20, 2020
                      </strong>{" "}
                      "The exterior is the most innovative and compelling part
                      of the building. It advances a dialogue of "complementary
                      contrast" with the two existing buildings: Distinct from
                      Mies’s thin transparency (1958/1974) and Moneo’s thick
                      opacity (2000), Holl’s scheme explores thick translucency.
                      . . . The overall effect conceals the true size of the
                      building and provides a repetitive, convex, muted façade
                      that’s refreshingly abstract."
                    </li>
                    <li>
                      <strong>
                        Illya Azaroff, FAIA, 2021 AIA New York State President
                      </strong>{" "}
                      "Every year the jury selects one project that they agree
                      stands out above all the others. . . The jury felt that
                      the form is inventive and seductive and material
                      expression lucent and cogent. Site relationships to its
                      neighbors are well considered and clear and the
                      circulation through the museum is intuitive. The exterior
                      provides a beacon in the center of the arts district. It
                      showcases innovative thinking about topography and
                      lightness." - Illya Azaroff, FAIA, 2021 AIA New York State
                      President
                    </li>
                    <li>
                      <strong></strong>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="togglelist">
                <h2 class="toggle">
                  News{" "}
                  <span class="toggle__plus">
                    <strong>+</strong>
                  </span>
                </h2>
                <div class="innerContentSec">
                  <hr class="line210" />
                  <ul>
                    <li>
                      2023{" "}
                      <a href="../../cbs-sunday-morning-the-luminist-architecture-of-steven-holl/index.html">
                        01/30 CBS Sunday Morning &#8220;The luminist
                        architecture of Steven Holl&#8221;
                      </a>
                    </li>
                    <li>
                      2021{" "}
                      <a href="../../kinder-building-receives-aia-nys-design-honor-award-and-is-named-best-of-the-best/index.html">
                        10/27 Kinder Building receives AIA NYS Design Honor
                        Award and is named &#8220;Best of the Best&#8221;
                      </a>
                    </li>
                    <li>
                      2021{" "}
                      <a href="../../kinder-museum-buildings-facade-continues-40-year-plus-research/index.html">
                        05/05 Kinder Museum Building&#8217;s Façade Continues
                        40-year Plus Research
                      </a>
                    </li>
                    <li>
                      2021{" "}
                      <a href="../../vote-for-the-kinder-museum-building-in-the-az-design-peoples-choice-award/index.html">
                        04/26 Vote for the Kinder Museum Building in the AZ
                        Design People&#8217;s Choice Award
                      </a>
                    </li>
                    <li>
                      2020{" "}
                      <a href="../../the-nancy-and-rich-kinder-building-opens-at-the-museum-of-fine-arts-houston/index.html">
                        11/16 THE NANCY AND RICH KINDER BUILDING OPENS AT THE
                        MUSEUM OF FINE ARTS, HOUSTON
                      </a>
                    </li>
                    <li>
                      2020{" "}
                      <a href="../../houstons-museum-of-fine-arts-is-proof-that-everything-really-is-bigger-in-texas/index.html">
                        10/23 &#8220;Houston&#8217;s Museum of Fine Arts Is
                        Proof That Everything Really Is Bigger In Texas&#8221;
                      </a>
                    </li>
                    <li>
                      2020{" "}
                      <a href="../../the-nancy-and-rich-kinder-building-will-open-to-the-public-november-21/index.html">
                        09/15 The Nancy and Rich Kinder Building will open to
                        the public November 21
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="togglelist">
                <h2 class="toggle">
                  Awards{" "}
                  <span class="toggle__plus">
                    <strong>+</strong>
                  </span>
                </h2>
                <div class="innerContentSec">
                  <hr class="line210" />

                  <ul>
                    <li>
                      2022 The PLAN Award, Honorable Mention in Culture Category{" "}
                    </li>
                    <li>
                      2022 National Terrazzo & Mosaic Association, Inc., 2022
                      Job of the Year{" "}
                    </li>
                    <li>
                      2022 ENR Texas & Louisiana, Best of the Best: Best
                      Cultural/Worship{" "}
                    </li>
                    <li>
                      2021 ENR Texas & Louisiana, Best Project: Cultural/Worship{" "}
                    </li>
                    <li>
                      2021 Architect’s Newspaper, Winner in Facades Category{" "}
                    </li>
                    <li>
                      2021 Architect’s Newspaper, Honorable Mention in Cultural
                      Category{" "}
                    </li>
                    <li>
                      2021 AIA New York Design, Honor Award and "Best of the
                      Best"{" "}
                    </li>
                    <li>2021 Texas Society of Architects Design Award </li>
                    <li>
                      2021 Architecture MasterPrize, and "Best of the Best"{" "}
                    </li>
                    <li>
                      2021 Houston Business Journal Landmark Award for Community
                      Impact{" "}
                    </li>
                    <li>2021 AZ Award Finalist </li>
                    <li>
                      2020 Architectural Digest, Most Anticipated Building of
                      the Year{" "}
                    </li>
                    <li>
                      2020 Vanceva World of Color Awards - Exterior Category
                      Winner{" "}
                    </li>
                    <li>
                      2020 Azure Magazine, Top 10 Architecture Projects of the
                      Year{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="togglelist gobackSec">
                <a href="#" class="more-relevand-btn">
                  More relevant works
                </a>

                
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
