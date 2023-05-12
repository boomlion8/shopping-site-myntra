import React from "react";
import { Link } from "react-router-dom";
import "./dropdown.css";

function Dropdown() {
  return (
    <div className="dropdown">
      <div className="dropdown1">
        <div className="dropdown_title">TopWear</div>

        <div className="dropdown_items">
          <Link to="/tshirt" style={{ textDecoration: "none", color: "black" }}>
            T-Shirts
          </Link>
        </div>

        <div className="dropdown_items">Casual Shirts</div>

        <div className="dropdown_items">Sweatshirts</div>
        <div className="dropdown_items">Sweaters</div>
        <div className="dropdown_items">Jackets</div>
        <div className="dropdown_items">Blazers& Coats</div>
        <div className="dropdown_items">Suits</div>
        <div className="dropdown_items">Rain Jackets</div>
        <hr className="horizontal_line" />

        <div className="dropdown_title">Indian & Festive Wear</div>

        <div className="dropdown_items">Kurtas & Kurta Sets</div>
        <div className="dropdown_items">Sherwanins</div>
        <div className="dropdown_items">Nehru Jackets</div>
        <div className="dropdown_items">Dhoties</div>
      </div>
      <div className="dropdown2">
        <div className="dropdown_title">BottomWear</div>

        <div className="dropdown_items"><Link to="/tshirt" style={{ textDecoration: "none", color: "black" }}>Jeans</Link></div>
        <div className="dropdown_items">Casual Trousers</div>
        <div className="dropdown_items">Formal Trousers</div>
        <div className="dropdown_items">Shorts</div>
        <div className="dropdown_items">Track Pants & Joggers</div>
        <hr className="horizontal_line" />

        <div className="dropdown_title">Innerwear & Sleepwear</div>

        <div className="dropdown_items">Briefs & Trunks</div>
        <div className="dropdown_items">Boxers</div>
        <div className="dropdown_items">Vests</div>
        <div className="dropdown_items">Sleepwear & Loungewear</div>
        <div className="dropdown_items">Thermals</div>
        <hr className="horizontal_line" />

        <div className="dropdown_title">Plus Size</div>
      </div>

      <div className="dropdown3">
        <div className="dropdown_title">FootWear</div>

        <div className="dropdown_items">Casual Shoes</div>
        <div className="dropdown_items">Shorts Shoes</div>
        <div className="dropdown_items">Formal Shoes</div>
        <div className="dropdown_items">Sneakers</div>
        <div className="dropdown_items">Sandals & Floaters</div>
        <div className="dropdown_items">Flip Flops</div>
        <div className="dropdown_items">Socks</div>
        <hr className="horizontal_line" />

        <div className="dropdown_title">Personal Care & Grooming</div>
        <div className="dropdown_title">Sunglasses & Framers</div>
        <div className="dropdown_title">Watches</div>
      </div>

      <div className="dropdown4">
        <div className="dropdown_title">Sport & Active Wear</div>

        <div className="dropdown_items">Sports Shoes</div>
        <div className="dropdown_items">Shorts Sandals</div>
        <div className="dropdown_items">Active T-Shirts</div>
        <div className="dropdown_items">Track Pants & Shorts</div>
        <div className="dropdown_items">Tracksuits</div>
        <div className="dropdown_items">Jackets & Sweatshirts</div>
        <div className="dropdown_items">Sports Accessories</div>
        <div className="dropdown_items">Swimwear</div>
        <hr className="horizontal_line" />

        <div className="dropdown_title">Gadgets</div>

        <div className="dropdown_items">Smart Wearables</div>
        <div className="dropdown_items">Fitness Gadgets</div>
        <div className="dropdown_items">Headphones</div>
        <div className="dropdown_items">Speakers</div>
      </div>
    </div>
  );
}

export default Dropdown;
