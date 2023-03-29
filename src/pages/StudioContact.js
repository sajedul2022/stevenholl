import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function StudioContact() {
  const [basic, setBasic] = useState([]);

  useEffect(() => {
    allBasic();
  }, []);

  const allBasic = async () => {
    axios
      .get(
        "http://localhost/Inspace/Inspace-backend/app/Http/Controllers/frontend/BasicController.php"
        // "http://127.0.0.1:8000/basic-frontend"
      )
      .then((res) => {
        setBasic(res.data.datas.basics);
        console.log(res.data.datas.basics);
      });
  };

  return (
    <>
      <div
        className="bgcommanSec fullscreenslider"
        style={{ backgroundImage: `url("assets/images/uploads/2.jpg")` }}
      ></div>

      <div className="paragraph-section">
        <div className="sub-paragraph">
          <h1>LOCATIONS</h1>
        </div>

        <div className="sub-paragraph">
          <div className="paragraph-block">
            <p>
              <u>Dhaka Office</u>
            </p>
            <p>House# 14/B, Rashid Nibash, Third Floor,</p>
            <p>Road 68, Gulshan 02, Dhaka 1212 </p>
            <p>Contact: +8801713063282, +8801610201122</p>

            <p>
              <a href="mailto:masuminspace@gmail.com">masuminspace@gmail.com</a>
            </p>
            <div>
              {basic.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.address}</td>
                </tr>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
