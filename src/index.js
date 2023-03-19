import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import StudioContact from './pages/StudioContact';
import EcologicalResilience from './pages/EcologicalResilience';

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/studio-contact" element={<StudioContact />} />
          <Route path="/ecological-resilience" element={<EcologicalResilience />} />
          
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterApp />);

reportWebVitals();

