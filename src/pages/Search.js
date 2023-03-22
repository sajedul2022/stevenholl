import React from "react";

export default function Search() {
  return (
    <div>
      <div
        className="bgcommanSec"
        style={{ backgroundImage: `url("assets/images/uploads/2.jpg")` }} 
      ></div>

      <div className="paragraph-section  search_sec">
        <div className="sub-paragraph">
          <div className="contenttext">
            <h1 className="entry-title">Search </h1>
            <form className="search_form" action="#">
              <label for="search" className="search_label label_hide">
                Search
              </label>
              <input
                type="text"
                name="s"
                id="search"
                placeholder="Search..."
                value=""
              />
              <input
                type="hidden"
                value="project"
                name="post_type"
                id="post_type"
              />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
