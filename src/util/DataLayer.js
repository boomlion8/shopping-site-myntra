import React, { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const DataLayerContext = createContext();
const DataLayer = ({ children }) => {
  const [bag, setBag] = useState([]);

  const [prod, setProd] = useState([]);

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "data"));
    let newMovies = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      newMovies.push(doc.data());
    });
    setProd(newMovies);
  };

  useEffect(() => {
    getData();
  }, []);

 


  

  
  const products = prod.map((d) => ({
    id: d.id,
    name: d.name,
    type: d.type,
    price: d.price,
    discount: d.discount,
    image:d.image,
  }));

  return (
    <DataLayerContext.Provider value={{ bag, setBag, products }}>
      {children}
    </DataLayerContext.Provider>
  );
};

export const useDataLayerValue = () => useContext(DataLayerContext);

export default DataLayer;
