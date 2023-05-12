import React from "react";
import "./profiledropdown.css";
import { useNavigate } from "react-router-dom";
function Profiledropdown() {
  const Navigate = useNavigate();
  return (
    <div className="profile_dropdown">
      <div>
        <div className="dropdown_title">Welcome</div>
        <div>To access account and manage orders</div>
        <div className="button" onClick={() => Navigate("/login")}>
          LOGIN/SIGNUP
        </div>
        <hr className="horizontal_line" />
      </div>
      <div>
        <div className="item">Orders</div>
        <div className="item">Wishlist</div>
        <div className="item">Gift Cards</div>
        <div className="item">Contact Us</div>
        <div className="item">Myntra Insider</div>
        <hr className="horizontal_line" />
      </div>

      <div>
        <div className="item">Myntra Credit</div>
        <div className="item">Coupons</div>
        <div className="item">Saved Cards</div>
        <div className="item">Saved VPA</div>
        <div className="item">Saved Addresses</div>
      </div>
    </div>
  );
}

export default Profiledropdown;
