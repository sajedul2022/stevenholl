import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./node_modules/video-react/dist/video-react.css";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import StudioContact from './pages/StudioContact';
import DesignProjects from './pages/DesignProjects';
import NewsEvents from './pages/NewsEvents';
import IdeaPhenomena from './pages/IdeaPhenomena';
import ConstructionProjects from './pages/ConstructionProjects';
import Search from './pages/Search';
import Museums from './category/Museums';
import SingleProject from './category/SingleProject';
import SingleNews from './category/SingleNews';


export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/studio-contact" element={<StudioContact />} />
          <Route path="/design-projects" element={<DesignProjects />} /> 
          <Route path="/design-projects/:id" element={<DesignProjects />} />

          <Route path="/news" element={<NewsEvents />} /> 
          <Route path="/idea" element={<IdeaPhenomena />} /> 
          <Route path="/construction-projects" element={<ConstructionProjects />} /> 
          <Route path="/construction-projects/:id" element={<ConstructionProjects />} /> 

          <Route path="/museums" element={<Museums />} /> 
          <Route path="/single-project" element={<SingleProject />} /> 
          <Route path="/single-project/:id" element={<SingleProject />} /> 


          <Route path="/single-news" element={<SingleNews />} /> 
          <Route path="/search" element={<Search />} /> 
          
          {/* <Route path="/design-cat/:ids" element={<DesignCat />} /> */}

        </Route>
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterApp />);

reportWebVitals();

