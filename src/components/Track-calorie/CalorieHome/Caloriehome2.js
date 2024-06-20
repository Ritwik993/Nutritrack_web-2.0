import React, { useEffect } from 'react';
import Vege from './assets/vegetable.jpg';
import './Caloriehome.css';
import Fruits from './assets/fruits.jpg';
import Breakfast from './assets/breakfast.jpg';
import Junk from './assets/junk.jpeg';
import Beverages from './assets/beverage.jpeg';
import Dessert from './assets/dessert.jpeg';
import { Link } from 'react-router-dom';

const Caloriehome2 = () => {
  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='main-caloriehome'>
        <h1 className='h1-calorie-main'>Calorie Tracker</h1>
        <h3 className='h3-calorie-main'>Keep track of your daily calorie intake to maintain a healthy lifestyle.</h3>
        <div className='container'>
          <div className='row'>
            {/* First row */}
            <div className='col-md-6 mb-4'>
              <div className='card p-0 overflow-hidden h-100 shadow'>
                <Link className='cal-home-link' to="/vegetables">
                  <img className="card-img-top" src={Vege} alt="vegetable" />
                  <div className="card-body">
                    <h3 className="card-title text-center">Vegetables</h3>
                  </div>
                </Link>
              </div>
            </div>
            <div className='col-md-6 mb-4'>
              <div className='card p-0 overflow-hidden h-100 shadow'>
                <Link className='cal-home-link' to="/breakfast">
                  <img className="card-img-top" src={Breakfast} alt="breakfast" />
                  <div className="card-body">
                    <h3 className="card-title text-center">Breakfast dishes</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* Second row */}
          <div className='row'>
            <div className='col-md-6 mb-4'>
              <div className='card p-0 overflow-hidden h-100 shadow'>
                <Link className='cal-home-link' to="/fruits">
                  <img className="card-img-top" src={Fruits} alt="fruits" />
                  <div className="card-body">
                    <h3 className="card-title text-center">Fruits</h3>
                  </div>
                </Link>
              </div>
            </div>
            <div className='col-md-6 mb-4'>
              <div className='card p-0 overflow-hidden h-100 shadow'>
                <Link className='cal-home-link' to="/junkfood">
                  <img className="card-img-top" src={Junk} alt="junk" />
                  <div className="card-body">
                    <h3 className="card-title text-center">Junk Foods</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* Third row */}
          <div className='row'>
            <div className='col-md-6 mb-4'>
              <div className='card p-0 overflow-hidden h-100 shadow'>
                <Link className='cal-home-link' to="/beverages">
                  <img className="card-img-top" src={Beverages} alt="beverages" />
                  <div className="card-body">
                    <h3 className="card-title text-center">Beverages</h3>
                  </div>
                </Link>
              </div>
            </div>
            <div className='col-md-6 mb-4'>
              <div className='card p-0 overflow-hidden h-100 shadow'>
                <Link className='cal-home-link' to="/dessert">
                  <img className="card-img-top" src={Dessert} alt="dessert" />
                  <div className="card-body">
                    <h3 className="card-title text-center">Desserts</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Caloriehome2;
