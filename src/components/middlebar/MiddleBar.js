import React from "react";

//import car2 from "../images/car2.jpg";
import "./middlebar.css";

import MultiActionAreaCard from "../card/Card";
import ActionAreaCard from "../circularcard/CircularCard";
function MiddleBar() {
  return (
    //   <div>
    //  <div className="container">
    <>
      <div>
        <div className="Middlebar">
          <h1 className="heading">Crazy Deals</h1>
          <h3 className="heading2">Lowest Prices On The Best Brands</h3>

          <button className="button">View All</button>
        </div>

        <div className="container">
          <div>
            <ActionAreaCard />
          </div>

          <div>
            <ActionAreaCard />
          </div>

          <div>
            <ActionAreaCard />
          </div>

          <div>
            <ActionAreaCard />
          </div>

          <div>
            <ActionAreaCard />
          </div>
        </div>
      </div>

      <div>
        <div className="heading">
          <h1>Shop By Category</h1>
        </div>

        <div className="container">
          <div>
            <MultiActionAreaCard />
          </div>

          <div>
            <MultiActionAreaCard />
          </div>

          <div>
            <MultiActionAreaCard />
          </div>

          <div>
            <MultiActionAreaCard />
          </div>

          <div>
            <MultiActionAreaCard />
          </div>
        </div>
      </div>

      {/* <img src={car2} alt="" className="carImage" style={{ padding: "90px" }} /> */}
    </>

    //   <div className="top-left">Top Left</div>
    //  </div>

    //  </div>
  );
}

export default MiddleBar;
