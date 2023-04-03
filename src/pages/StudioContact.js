import React, { useEffect, useState } from "react";
import { API_PATH } from "../API_PATH";



export default function StudioContact() {
  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [items, setItems] = useState([]);
  console.log(items)


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

      {items.map((item) => (
        <div key={item.id} className="paragraph-section">
          <div className="sub-paragraph">
            <h1>LOCATIONS</h1>
          </div>

          <div className="sub-paragraph">
            <div className="paragraph-block" key={item.id}>
              <p>
                <h3> Office </h3>
              </p>
              <p> <b> Address: </b>  {item.address}</p>
              <p><b>Contact: </b> {item.phone} </p>

              <p> <b> Mail: </b>
                <a href="mailto:">
                {item.email}
                </a>
              </p>
              <br/>
              

              <h3> Directions </h3>

              <div
                id="map-container-google-2"
                className="z-depth-1-half map-container"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.411314726089!2d90.40712851434951!3d23.803968592646125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7d95c61b819%3A0x13de197600ae7aef!2sInspace%20Atelier!5e0!3m2!1sen!2sus!4v1680082779646!5m2!1sen!2sus"
                  width="600"
                  height="350"
                  style={{ border: "0" }}
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
