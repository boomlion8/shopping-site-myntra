import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./sortby.css";

// const sort = () => {
//   return (

//   );
// };

function SortBy() {
  const [sortby, setSortby] = useState();
  return (
    <div className="sortby">
      <div
        className="sort"
        onClick={(e) => {
          setSortby(!sortby);
        }}
      >
        <div>Sort By :</div>
        <div className="rem">Recommended</div>
        <div>
          <ArrowDropDownIcon />
        </div>

        {sortby && (
          <div className="sor">
            <div className="sort_com">What's new</div>

            <div className="sort_com">Popularity</div>

            <div className="sort_com">Better Discount</div>

            <div className="sort_com">Price: High to Low</div>

            <div className="sort_com">Price: Low to High</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SortBy;
