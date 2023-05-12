import React from "react";
import "./App.css";
//import Bag from "./bag/Bag";
//import RightBar from "./pages/rightbar/RightBar";
// import AdvancedCarousel from "./components/AdvancedCarousel";
// import BasicCarousel from "./components/BasicCarousel";
import BottomBar from "./components/bottombar/BottomBar";
import Header from "./components/Header/Header";
//import Homenavigation from "./components/HomeNavigation/Homenavigation";
//import Homenavigation from "./components/Homenavigation";

import MiddleBar from "./components/middlebar/MiddleBar";

import TopBar from "./components/topbar/TopBar";

function Home() {
  return (
    <>
    

      <Header />
      <TopBar />
      <MiddleBar />
      <BottomBar />
   
    </>
  );
}

export default Home;
