import React, { useContext } from "react";
import "./cart.css";
import { CartContext } from "./Context";

function Cart() {
  const Globalstate = useContext(CartContext);

  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <div className="cart">
      {state.map((item, index) => {
        return (
          <div className="card" key={index}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <p>{item.quantity}</p>
            <p>{item.quantity * item.price}</p>
            <div>
              <button
                onClick={() => {
                  dispatch({ type: "INCREASE", payload: item });
                }}
              >
                +
              </button>
              <p>{item.quantity}</p>
              <button
                onClick={() => {
                  dispatch({ type: "DECREASE", payload: item });
                }}
              >
                -
              </button>
            </div>

            <h2
              nClick={() => {
                dispatch({ type: "REMOVE", payload: item });
              }}
            >
              x
            </h2>
            {state.length > 0 && (
              <div className="total">
                <h2>{total}</h2>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
