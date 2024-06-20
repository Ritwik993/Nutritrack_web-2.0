import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
// import cross_icon from "./cross_icon.png";
import { HiXMark } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { toggleButton } from "../../utils/buttonSlice";

const Navbar = ({ toggleLoginForm, setToggleLoginForm }) => {
  const [toggleNav, setToggleNav] = useState(false);

  const state = useSelector((store) => store.button.isLogin);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleToogle = () => {
    if (state) {
      setToggleLoginForm(true);
    }
    else {
      setToggleLoginForm(false);
      navigate('/');
      dispatch(toggleButton());
    }
  };

  // const handleLogOut = () => {
  //   signOut(auth).then(() => {
  //     // Sign-out successful.
  //     navigate("/");
  //   }).catch((error) => {
  //     // An error happened.
  //   });
  //   };

  return (
    <div className="navbarr">
      <div className="nav-leftt">
        <h1 className="nav-logo">NutriTrack</h1>
      </div>
      <div className="nav-search">
        <Link to="/" className="nav-links ">
          Home
        </Link>
        <Link to="/about" className="nav-links ">
          About
        </Link>
        {/* <Link to="/" className='nav-links' onClick={handleLogOut}>Logout</Link> */}
        <p className="nav-links sign_btn " onClick={() => handleToogle()}>
          {state ? "Sign In" : "Sign Out"}
        </p>
        <div className="hamburger">
          <RxHamburgerMenu
            className="hamburger_icon"
            onClick={() => setToggleNav(true)}
          />
          {toggleNav && (
            <div className="hamburger_nav">
              <div className="home_res">
                <Link to="/" className="nav-links1">
                  Home
                </Link>
                {/* <img src={cross_icon} className="cross" alt="cross" onClick={()=>setToggleNav(false)}/> */}
                <HiXMark
                  className="cross"
                  onClick={() => setToggleNav(false)}
                />
              </div>
              <Link to="/about" className="nav-links1">
                About
              </Link>
              <p className="nav-links1 sign_btn" onClick={() => handleToogle()}>
                {state ? "Sign In" : "Sign Out"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
