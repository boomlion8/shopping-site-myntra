import React from "react";
import SideBar from "./sidebar/SideBar";
import RightBar from "./rightbar/RightBar";
import "./detail.css";
import { useDataLayerValue } from "../util/DataLayer";
import SortBy from "./sidebar/SortBy";


function Itemdetail() {
  const { products } = useDataLayerValue();

  // const [prod, setProd] = useState();
  // const lowtohigh = products.sort((a, b) => a.price - b.price);
  // //const hightolow = products.sort((a, b) => b.price - a.price);
  

  return (
    <div className="detail">
      <div className="side">
        <SideBar />
      </div>

      <div className="right">
        {products.map((b) => (
          <RightBar key={b.id} b={b} />
        ))}
      </div>

      <div>
        <SortBy />
      </div>
    </div>
  );
}

export default Itemdetail;
