import React, { useEffect, useState } from "react";
import { API_PATH } from "../API_PATH";
import { Link } from "react-router-dom";

export default function Contact() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [items, setItems] = useState([]);
  console.log(items);

  useEffect(() => {
    fetch(`${API_PATH}/basic-fe`)
      // fetch("https://inspace.bdprogrammers.com/admin/api/basic-fe")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <>
      <div
        className="bgcommanSec fullscreenslider"
        style={{ backgroundImage: `url("assets/images/uploads/2.jpg")` }}
      ></div>

      <div className="container">
        <div className="row">
          <div className="col-sm-3 col-md-3 col-lg-3">
            <div className="sub-menu">
              <ul className="menu">
                <li> </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-8 col-md-8 col-lg-8 contact">
            <div className="body-content">
              <div className="row">
                {items.map((item, ids) => {
                  return (
                    <>
                      <div className="col-sm-12 col-md-12 col-lg-12  ">
                        <div className="">
                          <div key={(ids = 1)} item={item} className="">
                            <div className="">
                              <div className="sub-paragraph">
                                <div
                                  id="map-container-google-2"
                                  className="z-depth-1-half map-container"
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.411314726089!2d90.40712851434951!3d23.803968592646125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7d95c61b819%3A0x13de197600ae7aef!2sInspace%20Atelier!5e0!3m2!1sen!2sus!4v1680082779646!5m2!1sen!2sus"
                                    width="600"
                                    height="300"
                                    style={{ border: "0" }}
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                  ></iframe>
                                </div>

                                <div className="contact-add">
                                  <p>INSPACE ATELIER</p>
                                  <p>{item.address}</p>
                                  <p>
                                    <span>Phone: {item.phone}</span> &nbsp;  Email: <Link to="" > {item.email} </Link>
                                  </p>
                                </div>
                                <div className="DevCompany">
                                  <span>
                                    <p>
                                      Developed By&nbsp;
                                      <a
                                        target="_blank"
                                        href="https://www.sawebsoft.com"
                                      >
                                        SA WEBSOFT
                                      </a>
                                    </p>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
