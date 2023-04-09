import { Outlet } from "react-router-dom";
// import Footer from "./components/Footer";
import Header from "./components/Header";
// import HomeSlider from "./components/HomeSlider";
import "./../node_modules/video-react/dist/video-react.css";

import "./App.css";



function App() {
  return (
    <>
      
      <Header />
        {/* <HomeSlider/> */}

        <Outlet />

      {/* <Footer /> */}
    </>
  );
}

export default App;
