import React from "react";
import "./topbar.css";

import clothing1 from "../images/clothing1.jpg";
import clothing2 from "../images/clothing2.jpg";
import clothing3 from "../images/clothing3.jpg";
import clothing4 from "../images/clothing4.jpg";
import clothing5 from "../images/clothing5.jpg";
import clothing6 from "../images/clothing6.jpg";

// import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
// import ArrowRightIcon from "@mui/icons-material/ArrowRight";

function TopBar() {
  // const images = [{ car1 }, { clothing }];
  // const [curr, setCurr] = useState(0);

  // const nextSlide = () => {
  //   setCurr(curr === len - 1 ? 0 : curr + 1);
  // };

  // const prevSlide = () => {
  //   setCurr(curr === 0 ? len - 1 : curr - 1);
  // };
  // const len = images.length;

  return (
    <div className="topbar">
      {/* <ArrowLeftIcon onClick={prevSlide}/>
      <ArrowRightIcon onClick={nextSlide}/>

      {images.map((slide, index) => {
        return (
          <div className={index === curr} key={index}>
            {index === curr && (
              <img
                src={1}
                alt=""
                className="carImage"
                style={{ padding: "90px" }}
              />
            )}
          </div>
        );
      })} */}

      <img src={clothing1} alt="" className="carImage" />
      <img src={clothing2} alt="" className="carImage" />
      <img src={clothing3} alt="" className="carImage" />
      <img src={clothing4} alt="" className="carImage" />
      <img src={clothing5} alt="" className="carImage" />
      <img src={clothing6} alt="" className="carImage" />
    </div>
  );
}

export default TopBar;
