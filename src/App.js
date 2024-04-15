import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VitaminA from './components/Vitamins/VitaminA';
import VitaminB from './components/Vitamins/VitaminB';
import VitaminC from './components/Vitamins/VitaminC';
import VitaminD from './components/Vitamins/VitaminD';
import VitaminK from './components/Vitamins/VitaminK';
import VitaminE from './components/Vitamins/VitaminE';
import LoginComponent from './components/Login/LoginComponent';
import Footer from './components/Footer/Footer';
import Vitaminv from './components/Vitaminv/Vitaminv';
import VitaminvA from './components/Vitaminv/VitaminvA';
import VitaminvB from './components/Vitaminv/VitaminvB';
import VitaminvC from './components/Vitaminv/VitaminvC';
import VitaminvD from './components/Vitaminv/VitaminvD';
import VitaminvE from './components/Vitaminv/VitaminvE';
import VitaminvK from './components/Vitaminv/VitaminvK';
import Seacrh from './components/Search/Search';
import Caloriehome from './components/Track-calorie/CalorieHome/Caloriehome';
import Breakfast from './components/Track-calorie/Breakfast/Breakfast';
import Beverages from './components/Track-calorie/Beverages/Beverages';
import Dessert from './components/Track-calorie/Desserts/Dessert';
import JunkFood from './components/Track-calorie/JunkFood/JunkFoods';
import Fruits from './components/Track-calorie/FruVege/Fruits';
import Vegetables from './components/Track-calorie/FruVege/Vegetables';
import Cart from './components/Track-calorie/Cart';
import Nutritionist from './components/Nutritionist/Nutritionist';
import { CartProvider } from 'react-use-cart';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/vitaminA" element={<VitaminA/>} />
          <Route path="/vitaminB" element={<VitaminB/>} />
          <Route path="/vitaminC" element={<VitaminC/>} />
          <Route path="/vitaminD" element={<VitaminD/>} />
          <Route path='/vitaminK' element={<VitaminK/>} />
          <Route path='/vitaminE' element={<VitaminE/>} />
          <Route path='/vitaminv' element={<Vitaminv/>} />
          <Route path='/vitaminvA' element={<VitaminvA/>} />
          <Route path='/vitaminvB' element={<VitaminvB/>} />
          <Route path='/vitaminvC' element={<VitaminvC/>} />
          <Route path='/vitaminvD' element={<VitaminvD/>} />
          <Route path='/vitaminvE' element={<VitaminvE/>} />
          <Route path='/vitaminvK' element={<VitaminvK/>} />
          <Route path='/search' element={<Seacrh/>} />
          <Route path='/caloriehome' element={<Caloriehome/>} />
          <Route path='/breakfast' element={<Breakfast/>} />
          <Route path='/beverages' element={<Beverages/>} />
          <Route path='/dessert' element={<Dessert/>} />
          <Route path='/junkfood' element={<JunkFood/>} />
          <Route path='/fruits' element={<Fruits/>} />
          <Route path='/vegetables' element={<Vegetables/>} />
          <Route path='/nutritionist' element={<Nutritionist/>} />
          <Route path='/cart' element={<CartProvider> <Cart/></CartProvider>} />
        </Routes>
        <Footer />
      </div>
    </Router>

    
  );
}
export default App;
