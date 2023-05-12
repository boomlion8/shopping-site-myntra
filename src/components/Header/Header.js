import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import "./header.css";
import Dropdown from "./Dropdown";
import Profiledropdown from "./Profiledropdown";
import { Link } from "react-router-dom";
function Header() {
  const [active, setActive] = useState();
  const [act, setAct] = useState();

  return (
    <div className="header">
      <div className="header1">
        <img
          src="https://gumlet.assettype.com/afaqs%2F2021-01%2F15f5f827-8e29-4520-af8d-a0f353b8da17%2Fimages.png?auto=format%2Ccompress&w=360&dpr=2.6"
          alt="myntralogo"
          className="myntra_logo"
        />
      </div>
      <div className="header2">
        <div
          className="title"
          onClick={(e) => {
            setActive(!active);
          }}
        >
          MEN
          {active && <Dropdown />}
        </div>

        <div
          className="title"
          onClick={(e) => {
            setActive(!active);
          }}
        >
          WOMEN
        </div>
        <div
          className="title"
          onClick={(e) => {
            setActive(!active);
          }}
        >
          KIDS
        </div>
        <div
          className="title"
          onClick={(e) => {
            setActive(!active);
          }}
        >
          HOME & LIVING
        </div>
        <div className="title">BEAUTY</div>
        <div className="title">STUDIO</div>
      </div>

      <div className="header3">
        <div className="searchIcon">
          <SearchIcon />
        </div>

        <div>
          <input
            type="text"
            placeholder="Search for Product brands and more"
            className="searchbar"
          />
        </div>
      </div>

      <div className="header4">
        <div className="icons">
          <PersonOutlineIcon className="icon1" />
          <div onClick={(e) => setAct(!act)}>
            PROFILE
            {act && <Profiledropdown />}
          </div>
        </div>
        <div className="icons">
          <FavoriteBorderIcon className="icon1" />
          <div>WISHLIST</div>
        </div>
        <div className="icons">
          <WorkOutlineIcon className="icon" />
          <Link to="/card" style={{ textDecoration: "none", color: "black" }}>
            <div className="bag">BAG</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
