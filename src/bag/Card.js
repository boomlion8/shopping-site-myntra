import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./card.css";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

function Card({ b }) {
  const { id, name, price, type, discount, image } = b;

  const [quantity, setQuantity] = useState(1);

  const addquantity=()=>{
    setQuantity(quantity+1)
  }
  const removequantity=()=>{
    setQuantity(quantity-1)
  }

  return (
    <div className="cart_card" key={id}>
      <div className="cart_card_left" >
        <img src={image} alt="" className="tshirt_img" />
      </div>

      <div className="cart_card_middle">
        <div className="cart_header">{name}</div>
        <div className="clothtype">{type}</div>
        <div>Sold by: Truenet Commernce</div>
        <div>
          <div className="size">
            <div>Size :</div>
            <div className="xl">XL</div>
          </div>
          <div className="size">
            <div>Qty:</div>
            <div className="removequantity" onClick={removequantity}>
              <RemoveIcon />
            </div>
            <div>{quantity}</div>
            <div className="addquantity" onClick={addquantity}>
              <AddIcon />
            </div>
          </div>
        </div>
        <div>
          <div className="cart_header">Rs {price}</div>
          <div>{discount} % OFF</div>
        </div>
        <div>
          <div>30 days</div>
          <div>return available</div>
        </div>
      </div>
      <div className="cart_card_right">
        <Link to="/tshirt">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAY1BMVEX///8AAAC9vb2zs7Pb29vr6+u4uLje3t5+fn6YmJiKioro6OjHx8ebm5sSEhKNjY0hISHz8/MuLi4LCwt2dnaEhIQ6OjoZGRlXV1dGRkbU1NRkZGRAQEAmJiZubm6jo6NOTk6OIlShAAADlElEQVRogcWba3uiMBSEg9WKtirKeqnarf//Vy4UaQMkmXPLs/OxiXk9mUmgBJ371fVYFafVm8uk/Tw69LroNMsCfn80Q5+/gm1l0es1A3n3HPuyT5Fz1L36GXvK9sn27JU39mPEHpKt2ZvB2B9JclG8GJJ3o7EPSbIlez0Z+/4z5yGyHXtKbuZ8kSJb+T2e7U6PRexb2bFXkbHbuq9RsgV7Ex37EZ/ub2n3tVjNXV1VCq3MWtjnp24uSdax4ylqdXZ3wJb7nay5RafsULHRwDe3QGghO57tpxorZ1nYcDJPba9XyOZnDfhcFFW3jeO6uex0thsd+ts0zObtLbDmw+8Noq3fHLJzL4ZsmO3tYtDfjg2zPSJT2DS/+WSrnONsT8k2bF7COGzkN309j4X3tTQb+lyFZruTLueQXMfJOjYkFymyJmv4ipEmy9nSbPPYob1Fnm0ee+o39PmT9pyEnzVIPiOfpWzutSolvLf4fsOEkWtuxck5zjaHzMm5TbZ57BmxZv4zQNq1BF8xJE8fKTm3zDaP/Rd1SF6rUsJ+A31KyWq2IGFGbBVZxSZeMeLCWYtImG0DtjjbvvDeEhC8G6JJ4DfzimHIVmZbwTYkM/028rkXI+cm2fZFrttgPY9F9FtxxVCyTRPmsWtIPuU6EX1AtOUZlS94T9Kk+/1/kRvlYN9I5BxsKtmeTSdbs2k+52D/YZEt2VyyHZtPtmLzfO5lcRYrI1uwpWT9nCcPerOyNWQdW0fWsCWraihp1iC5gs8zhGxI3s4J92uSOcc+zx3lHpnPPsIxl9/98P8GXDYmz589rdm02e6kPSdikuul19vyHJiSbV92bOhzPR99wmqNwWe9xZhstcYweRn4lMX5N3yyHqjZhk3dSabSvmsBV9U2XLOeDWtOkHVrTJJtGzY+BY753EuaNW3NcrZsPY/FOxfsxN89w+LnHO4kyWxr2HC2iTXT2L7f+mz74tw7YDK95lb0nNvWTGN3ftusqqFofsNe5Gzz2AvnPnKQCeyN26Mu/Nmmse9unomMs4Ze3JWTEbty6RfENWSwt5TJ78bYPcNK+X11iSevwmzT2Ou2eX+JtOrJcXbZNUfYFuSYn2XfvA9tKzbkMLv02qe/CNBlO80uB+2jums78tTvIXnkt0G24+xy3OyzjclD9oQ8YFuT/X0tQG7Yz71F9K4UUl/3LtZ+29aX8E8p1XpbnYrqePX+8g/h7S5w8cw66QAAAABJRU5ErkJggg=="
            alt=""
            className="cross"
          />
        </Link>
      </div>
    </div>
  );
}

export default Card;
