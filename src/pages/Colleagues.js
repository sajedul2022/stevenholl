import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { API_PATH, MAIN_PATH } from "../API_PATH";

export default function Colleagues() {
  // cat design
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const getdata = async () => {
    const res = await fetch(`${API_PATH}/colleagues-fe`, {
      // const res = await fetch("https://inspace.bdprogrammers.com/admin/api/const-cat", {
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

  // return

  return (
    <>
      <div
        className="bgcommanSec fullscreenslider"
        style={{
          // backgroundImage: `url("assets/images/uploads/1.jpg")`,
          backgroundColor: "#0025db7d",
        }}
      ></div>

      <div className="container">
        <div className="row">
          <div className="col-sm-3 col-md-3 col-lg-3">
            <div className="sub-menu">
              <ul className="menu">
                <li></li>
              </ul>
            </div>
          </div>

          <div className="col-sm-8 col-md-8 col-lg-8">
            <div className="body-content">
              <div className="row">
                {getuserdata.map((item, ids) => {
                  return (
                    <>
                      <div className="col-sm-12 col-md-12 col-lg-12 colleagues">
                        <div className="">
                          <div key={(ids = 1)} item={item} className="">
                            <div className="sub-paragraph">
                              <article
                                id="post-5833"
                                className="post-5833 page type-page status-publish has-post-thumbnail hentry"
                              >
                                <div className="entry-content">
                                  <h4>
                                    {item.title}
                                  </h4>

                                  <div className="img-wrap">
                                    <img
                                      src={`${MAIN_PATH}/images/${item.image}`}
                                      // src="http://127.0.0.1:8000/images/20230410072328.jpg"
                                      alt={item.name}
                                    />
                                  </div>
                                   {/* 'title' , 'vacancy', 'context', 'responsibilities', 'education', 'requirements' , 'salary', 'others', 'g_form',  'image' */}


                                  <p>
                                    <b>vacancy: </b> <br />
                                    {item.vacancy}
                                  </p>
                                  <p>
                                    <b>Job context: </b> <br />
                                    {item.context}
                                  </p>
                                  <p>
                                    <b>Responsibilities: </b> <br />
                                    {item.responsibilities}
                                  </p>
                                  
                                  <p>
                                    <b>Education: </b> <br />
                                    {item.education}
                                  </p>
                                  <p>
                                    <b>Requirements: </b> <br />
                                    {item.requirements}
                                  </p>
                                  <p>
                                    <b>Salary: </b> <br />
                                    {item.salary}
                                  </p>

                                  <hr />
                                  
                                    <p>
                                    <span> Mail your CV: {item.others} <br></br>  OR
                                    Apply Google Form:  <Link to={item.g_form}> {item.g_form} </Link></span> </p>
                                    

                                </div>
                              </article>
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
