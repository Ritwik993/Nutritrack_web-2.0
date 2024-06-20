import React, { useEffect, useState } from 'react';
import Data from './Junkdata';
import { CartProvider } from 'react-use-cart';
import ItemCard from './ItemCard';
import Tracknavbar from '../Tracknavbar';
import { Link } from 'react-router-dom';
import '../CommonCalorie.css';
import axios from 'axios';

const JunkFoods2 = () => {
  const [junkFoodItems,setJunkFoodItems]=useState([]);
  useEffect(() => {
    // Scroll to the top of the page when component mounts
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData=async()=>{
    const response=await axios.get("http://localhost:8082/getAllJunkFoods");
    setJunkFoodItems(response.data);
  }

  return (
    <>
      <div>
        <Tracknavbar />
      </div>
      <div>
        <CartProvider>
          <h1 className='cal-h1-track text-center mt-3'>Junk Food</h1>
          <section className='py-4 container'>
            <div className='row justify-content-center'>
              {junkFoodItems.map((item) => (
                <ItemCard
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
      <div className='common-cal'>
        <Link className='view-cart-link' to="/cart">
          View Cart<span>&#8594;</span>
        </Link>
      </div>
    </>
  );
};

export default JunkFoods2;
