import React, { useEffect, useState } from "react";
import { API_PATH } from "../API_PATH";

export default function IdeaPhenomena() {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const getdata = async () => {
    const res = await fetch(`${API_PATH}/idea-fe`, { 
    // const res = await fetch("https://inspce.bdprogrammers.com/admin/api/idea-fe", {
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
      <div
        className="bgcommanSec"
        style={{ backgroundImage: `url("assets/images/uploads/4.jpg")` }}
      ></div>

      <div className="paragraph-section">
        <div className="sub-paragraph">
          <h1 className="">Idea</h1>
        </div>

        <div className="sub-paragraph">
          <article id="post-5833" className="post-5833 page type-page status-publish has-post-thumbnail hentry">
            {getuserdata.map((element, id) => {
              return (
                <div className="entry-content" key={id} item={element} >
                  <h4> {id + 1}. {element.title}</h4>
                  <p>{element.description}</p>
                  <hr />
                </div>
              );
            })}
          </article>
        </div>
      </div>
    </>
  );
}
