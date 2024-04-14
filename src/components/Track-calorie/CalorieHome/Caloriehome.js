import React, { Component } from 'react';
import Vege from './assets/vegetable.jpg';
import './Caloriehome.css';
import Fruits from './assets/fruits.jpg';
import Breakfast from './assets/breakfast.jpg';
import Junk from './assets/junk.jpeg';
import Beverages from './assets/beverage.jpeg';

// import { Link } from 'react-router-dom';
export default class Caloriehome extends Component {
  render() {
    return (
        <>
        <div className='main-caloriehome'>
                <h1 className='h1-calorie-main'>Calorie Tracker</h1>
                <h3 className='h3-calorie-main'>Keep track of your daily calories intake to maintain a healthy lifestyle.</h3>
                <div className='comp1'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <div className='card p-0 overflow-hidden h-100 shadow'>
                                    <img className="card-img-top" src={Vege} alt="vege" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Vegetables</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className='card p-0 overflow-hidden h-100 shadow'>
                                    <img className="card-img-top" src={Breakfast} alt="Cbreak" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Breakfast dishes</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className='card p-0 overflow-hidden h-100 shadow'>
                                    <img className="card-img-top" src={Fruits} alt="frui" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Fruits</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <div className='card p-0 overflow-hidden h-100 shadow'>
                                    <img className="card-img-top" src={Junk} alt="junk" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Junk Foods</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className='card p-0 overflow-hidden h-100 shadow'>
                                    <img className="card-img-top" src={Beverages} alt="bev" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Beverages</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className='card p-0 overflow-hidden h-100 shadow'>
                                    <img className="card-img-top" src={Vege} alt="abc" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">abc</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></> 
    );
  }
}