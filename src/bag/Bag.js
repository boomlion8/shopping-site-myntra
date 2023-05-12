import Card from "./Card";
import React from "react";
import "./bag.css";
import { useDataLayerValue } from "../util/DataLayer";

import DiscountIcon from "@mui/icons-material/Discount";

function Bag() {
  const { bag } = useDataLayerValue();

  return (
    <div className="bag">
      <div className="bag_left">
        <div className="bag_item">
          <div className="item">Check delivery time & services</div>

          <div className="button">ENTER PIN CODE</div>
        </div>
        <div className="available">
          <div>Availabe Offerrs</div>
          <div>
            Get up to Rs500 Cashback on CRED PAY UPI (Android Devices only) on a
            min spend of Rs 500. TCA
          </div>
        </div>
        <div className="remove">
          <div>REMOVE</div>
          <div>MOVE TO WISHLIST</div>
        </div>
        <div>
          {bag.map((b) => (
            <Card key={b.id} b={b} />
          ))}
        </div>
      </div>

      <div className="bag_right">
        <div className="coupons">COUPONS</div>
        <div className="bag_coupons">
          <div>
            <DiscountIcon />
          </div>
          <div>Apply Coupons</div>
          <div className="apply">Apply</div>
        </div>
        <div className="log_coupons">
          <span className="log">Login </span>
          to get upto Rs300 OFF on first order
        </div>
        <hr />

        <div className="pricedetails">
          <div>PRICE DETAILS (1 Item)</div>

          <div className="mrp">
            <div>Total MRP</div>
            <div>Rs599</div>
          </div>

          <div className="mrp">
            <div>Dicount on MRP</div>
            <div>-Rs420</div>
          </div>

          <div className="mrp">
            <div>Coupon Discount</div>
            <div>Apply Coupon</div>
          </div>

          <div className="mrp">
            <div>
              Conveniece Fee <span>Know More</span>
            </div>
            <div>Rs99</div>
          </div>
          <div className="mrp">
            <div>Total Amount</div>
            <div>Rs.278</div>
          </div>
        </div>
        <div className="order">PLACE ORDER</div>
      </div>
    </div>
  );
}

export default Bag;
