import React, { useContext } from "react";
import { CartContext } from "./Context";
import "./home1.css";
function Home1() {

  const Globalstate=useContext(CartContext);

  console.log(Globalstate);
  return <div>This is Home1</div>;
}

export default Home1;
