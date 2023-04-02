import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NewsEvents() {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const getdata = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/news-fe", {
    // const res = await fetch("https://inspace.bdprogrammers.com/admin/api/news-fe", {
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
        style={{ backgroundImage: `url("assets/images/uploads/1.jpg")` }}
      ></div>

      <div className="bgcommanSec"></div>
      <div className="paragraph-section news_page">
        <div className="sub-paragraph">
          <h1>News & Events</h1>
        </div>

        <div className="font_13">
          {getuserdata.map((element, id) => {
            return (
              <div
                className="newsListSec"
                id="aajax-posts"
                key={id}
                item={element}
              >
                <div className="newbox sub-paragraph">
                  <div className="img-wrap">
                    <Link to="/news">
                      <div className="img">
                        <img
                          // src="assets/images/uploads/3.jpg"
                          src={`http://127.0.0.1:8000/images/${element.image}`}
                          alt="Image"
                        />
                      </div>
                    </Link>
                  </div>
                  <br /> <br />
                  <div className="content-wrap">
                    {/* <div className="metasec">{ element.created_at} </div> */}
                    <h3>
                      {/* <Link to="/news">{element.title}</Link> */}
                      {element.title}
                    </h3>
                    <p className="news-content">
                      {element.short_des}
                      <span>
                        {/* <Link to="/single-news">more</Link>{" "} */}
                      </span>
                    </p>
                    <h5> More Details: </h5>
                    <p> {element.full_des} </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
