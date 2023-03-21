import React from "react";

export default function Search() {
  return (
    <div>
      <div
        class="bgcommanSec"
        style={{ backgroundImage: `url("assets/images/uploads/2.jpg")` }} 
      ></div>

      <div class="paragraph-section presslistSec search_sec">
        <div class="sub-paragraph">
          <div class="contenttext">
            <h1 class="entry-title">Search </h1>
            <form class="search_form" action="#">
              <label for="search" class="search_label label_hide">
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
