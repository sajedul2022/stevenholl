import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./node_modules/video-react/dist/video-react.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Works from "./pages/Works";
import SingleProject from "./category/SingleProject";
import People from "./pages/People";
import Pratice from "./pages/Pratice";
import Colleagues from "./pages/Colleagues";
import Contact from "./pages/Contact";

// import NewsEvents from "./pages/NewsEvents";
// import IdeaPhenomena from "./pages/IdeaPhenomena";
// import Search from "./pages/Search";
// import Museums from "./category/Museums";
// import SingleNews from "./category/SingleNews";

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/people" element={<People />} />
          <Route path="/pratice" element={<Pratice />} />
          <Route path="/colleagues" element={<Colleagues />} />

          <Route path="/works" element={<Works />} />
          <Route path="/works/:id" element={<Works />} />
          <Route path="/single-project" element={<SingleProject />} />
          <Route path="/single-project/:id" element={<SingleProject />} />

          {/* <Route path="/single-news" element={<SingleNews />} /> 
          <Route path="/search" element={<Search />} /> 
          <Route path="/news" element={<NewsEvents />} /> 
          <Route path="/idea" element={<IdeaPhenomena />} /> 
          <Route path="/museums" element={<Museums />} />  */}
          {/* <Route path="/design-cat/:ids" element={<DesignCat />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterApp />);

reportWebVitals();
