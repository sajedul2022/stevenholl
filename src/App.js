import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import HomeSlider from "./components/HomeSlider";

import "./App.css";



function App() {
  return (
    <>

      <Header />
        {/* <HomeSlider/> */}

      <Outlet />

      <Footer />
    </>
  );
}

export default App;
