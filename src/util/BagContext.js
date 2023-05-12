import { createContext, useContext, useReducer } from "react";

const BagContext = createContext();
const initialValue = {
  bag: [],
};

const bagReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        bag: [...state.bag, { ...payload, quantity: 1 }],
      };

    case "DECREMENT":
      return {
        ...state,
        bag: state.bag.map((product) =>
          product.id === payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      };

    case "INCREMENT":
      return {
        ...state,
        bag: state.bag.map((product) =>
          product.id === payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    default:
      return state;
  }
};

export const BagProvider = ({ children }) => {
  const [{ bag }, bagDispatch] = useReducer(bagReducer, initialValue);
  return (
    <BagContext.Provider value={{ bag, bagDispatch }}>
      {children}
    </BagContext.Provider>
  );
};

export const useBag = () => useContext(BagContext);
