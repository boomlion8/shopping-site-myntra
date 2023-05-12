import React from "react";
import { Link } from "react-router-dom";
import { useDataLayerValue } from "../../util/DataLayer";
//import Card from "./Card";
//import { useDataLayerValue } from "../../util/DataLayer";

//import Card from "./Card";
import "./rightbar.css";

//import axios from "axios";

function RightBar({ b }) {
  const { bag, setBag } = useDataLayerValue();

  // const [value, setValue] = useState([]);

  // useEffect(() => {
  //   getData();
  // });

  // const getData = () => {
  //   try {
  //     axios.get("data.json").then(function (response) {
  //       setValue(response.data.items[1]);
  //     });

  //     console.log(value.price);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // let data = [
  //   {
  //     id: "1",
  //     name: "Roadster",
  //     type: "Solid Polo Collar Pure Cotton",
  //     price: "959",
  //     discount: "40",
  //   },
  //   {
  //     id: "2",
  //     name: "H& M",
  //     type: "Solid Polo Collar Pure Cotton",
  //     price: "959",
  //     discount: "40",
  //   },

  //   {
  //     id: "2",
  //     name: "H& M",
  //     type: "Solid Polo Collar Pure Cotton",
  //     price: "959",
  //     discount: "40",
  //   },
  // ];

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const {
  //         data: { books },
  //       } = await axios.get("data.json");
  //       setValue(books);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);

  // return (
  //   <>
  //     <div>
  //       {data.map((item) => (
  //         <div className="i1" key={item.id}>
  //           <div>
  //             <ImageContext.Provider>
  //               <img
  //                 src="data:image/jpeg;base64,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"
  //                 alt=""
  //                 className=""
  //               />
  //             </ImageContext.Provider>
  //           </div>
  //           <div>{item.id}</div>
  //           <div>{item.name}</div>

  //           <div>{item.type}</div>

  //           <div className="price_item">
  //             <div className="p1">Rs. {item.price} </div>
  //             <div className="p1">({item.discount} OFF)</div>
  //           </div>
  //           <button className="button">
  //             <Link
  //               to="/card"
  //               style={{ textDecoration: "none", color: "black" }}
  //             >
  //               Add to Cart
  //             </Link>
  //           </button>
  //         </div>
  //       ))}
  //     </div>
  //   </>

  //   // <Card value={value} />
  // );

  //   return (
  //     <>
  //       <div className="i1" key={b.id}>
  //         <div>
  //           <img
  //             src="data:image/jpeg;base64,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"
  //             alt=""
  //             className=""
  //           />
  //         </div>
  //         {/* <div>{b.id}</div> */}
  //         <div>{b.name}</div>

  //         <div>{b.type}</div>

  //         <div className="price_item">
  //           <div className="p1">Rs. {b.price} </div>
  //           <div className="p1">({b.discount} OFF)</div>
  //         </div>
  //         <div className="button" onClick={() => setBag([...bag,b])}>
  //           <Link to="/card" style={{ textDecoration: "none", color: "black" }}>
  //             Add to Cart
  //           </Link>
  //         </div>
  //       </div>
  //     </>
  //   );

  // }

  return (
    <>
      <div className="i1" key={b.id}>
        <div>
          <img src={b.image} alt="" className="tshirt_img" />
        </div>
        <div className="brandname">{b.name}</div>

        <div className="clothtype">{b.type}</div>

        <div className="price_item">
          <div className="p1">Rs. {b.price} </div>
          <div className="p1">({b.discount}% OFF)</div>
        </div>
        <div className="button addtocard" onClick={() => setBag([...bag, b])}>
          <Link to="/card" style={{ textDecoration: "none", color: "black" }}>
            Add to Cart
          </Link>
        </div>
      </div>
    </>
  );
}
export default RightBar;
