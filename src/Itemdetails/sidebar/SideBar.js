import React from "react";
import "./Sidebar.css";
import Checkbox from "@mui/material/Checkbox";


function SideBar() {
  return (
    <div>
      <div className="title_header">FILTERS</div>
      <hr />
      <div>
        <div className="title_header">CATEGORIES</div>
        <div className="ch">
          <div>
            <Checkbox />
          </div>
          <div className="tshirt">Tshirts</div>
        </div>
        <div className="ch">
          <div>
            <Checkbox />
          </div>
          <div className="tshirt">Lounge Tshirts</div>
        </div>
      </div>

      <div>
        <div className="title_header">BRAND</div>

        <div className="ch">
          <div>
            <Checkbox />
          </div>
          <div className="tshirt">Roadster</div>
        </div>

        <div className="ch">
          <div>
            <Checkbox />
          </div>
          <div className="tshirt">Puma</div>
        </div>

        <div className="ch">
          <div>
            <Checkbox />
          </div>
          <div className="tshirt">WROGN</div>
        </div>

        <div className="ch">
          <div>
            <Checkbox />
          </div>
          <div className="tshirt"> Here & Now</div>
        </div>

        <div className="ch">
          <div>
            <Checkbox />
          </div>
          <div className="tshirt">Jack & Jones</div>
        </div>

        <div className="ch">
          <div>
            <Checkbox />
          </div>
          <div className="tshirt">U.S. Polo Assn.</div>
        </div>
      </div>

     
    </div>
  );
}

export default SideBar;
