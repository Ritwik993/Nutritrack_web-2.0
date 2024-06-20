import React,{useEffect,useState} from "react";
import "./Vegetable.css";
import VegetableCart from "./VegetableCart";
import { CartProvider } from "react-use-cart";
import Tracknavbar from "../Tracknavbar";
import { Link } from "react-router-dom";
import axios from 'axios';
const Vegetables = () => {
  const [vegetableItems,setVegetableItems]=useState([]);
  useEffect(() => {
    // Scroll to the top of the page when component mounts
    getData();
    window.scrollTo(0, 0);
  }, []);
  const getData=async()=>{
    const response=await axios.get("http://localhost:8082/getAllVegetables");
    setVegetableItems(response.data);
  }
  return (
    <><><><div>
      <Tracknavbar />
    </div><CartProvider>
        <div className="vegetable_container_heading">
          <h1 className='cal-h1-track'>Vegetables</h1>
        </div>
        <div className="vegetable_container">
          {vegetableItems.map((item) => {
            return <VegetableCart {...item} key={item.id} />;
          })}
        </div>
      </CartProvider>
      <div className='common-cal'>
        <Link className='view-cart-link' to="/cart">View Cart<span>&#8594;</span></Link></div></>
    </></>
  );
};

export default Vegetables;
