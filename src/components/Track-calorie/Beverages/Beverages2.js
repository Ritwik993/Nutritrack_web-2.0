import React, { useEffect, useState } from "react";
import Itemcard from "./BeveragesItemCard";
import Data from "./Beveragesdata";
import { CartProvider } from "react-use-cart";
import Tracknavbar from "../Tracknavbar";
import { Link } from "react-router-dom";
import "../CommonCalorie.css";
import axios from "axios";

const Beverages2 = () => {
  const [beverageItems,setBeverageItems]=useState([]);
  useEffect(() => {
    // Scroll to the top of the page when component mounts
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = async () => {
    const response=await axios.get("http://localhost:8082/getAllBeverages");
    // console.log(data);
    setBeverageItems(response.data);
  };

  return (
    <>
      <div>
        <Tracknavbar />
      </div>
      <div>
        <CartProvider>
          <h1 className="cal-h1-track text-center mt-3">Beverage Items</h1>
          <section className="py-4 container">
            <div className="row justify-content-center">
              {beverageItems.map((item) => (
                <Itemcard
                  img={item.img}
                  title={item.title}
                  calories={item.calories}
                  id={item.id}
                  key={item.id}
                />
              ))}
            </div>
          </section>
        </CartProvider>
      </div>
      <div className="common-cal">
        <Link className="view-cart-link" to="/cart">
          View Cart<span>&#8594;</span>
        </Link>
      </div>
    </>
  );
};

export default Beverages2;
