import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const getdata = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/basic-fe", {
    // const res = await fetch("https://inspace.bdprogrammers.com/admin/api/basic-fe", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setUserdata(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <footer className="footer ">
        {getuserdata.map((element, id) => {
          return (
            <>

              <div key={id} item={element} className="footer-left">
                <span>
                  © 2023{" "}
                  <Link to="">
                    INSPACE <i> atelier </i>
                  </Link>
                </span>
                <span className="social-icon">
                  <Link to={element.facebook} target="_blank">
                    <img src="/assets/images/facebook.svg" alt="" /> 
                  </Link>

                  <Link to={element.instagram} target="_blank">
                    <img src="/assets/images/instagram.svg" alt="" />
                  </Link>
                </span>
                <span>
                  <Link to="/search">Search</Link>
                </span>
              </div>
              <div key={id} item={element} className="footer-right">
                <span>
                  <p>
                    Developed By{" "}
                    <a target="_blank" href="https://www.sawebsoft.com">
                      SA WebSoft
                    </a>
                  </p>
                </span>
                &nbsp; &nbsp;
                <span>
                  <p>
                    {/* &nbsp; House# 14/B, Rashid Nibash, Third Floor, Road 68,
                    Gulshan 02, Dhaka 1212 */}

                         {element.address}
                  </p>
                </span>
              </div>
            </>
          );
        })}
      </footer>
    </>
  );
}
