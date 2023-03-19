import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudioContact from './pages/StudioContact';
import DesignProjects from './pages/DesignProjects';
import NewsEvents from './pages/NewsEvents';
import IdeaPhenomena from './pages/IdeaPhenomena';
import ConstructionProjects from './pages/ConstructionProjects';

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<App />} />
          <Route path="/studio-contact" element={<StudioContact />} />
          <Route path="/design-projects" element={<DesignProjects />} /> 
          <Route path="/news" element={<NewsEvents />} /> 
          <Route path="/idea" element={<IdeaPhenomena />} /> 
          <Route path="/construction-projects" element={<ConstructionProjects />} /> 
          
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterApp />);

reportWebVitals();

