import React, { useRef, useState } from "react";
import Login_image from "./images/Login_page.jpeg"
import "./Login3.css";
import { validateFormData } from "../../utils/validate";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleButton } from "../../utils/buttonSlice";
import axios from 'axios';
import { addUser } from "../../utils/userSlice";

const Login3 = () => {
  const [toggleSignInForm, setToggleSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name =useRef(null);
  const dispatch=useDispatch();
  const navigate=useNavigate();



  const handleSignIn = async () => {
    const message = validateFormData(
      "Ritwik",
      email.current.value,
      password.current.value
    );
    if (message) {
      setErrMessage(message);
    } else {
      try {
        const response = await axios.post('http://localhost:8082/signIn', 
          new URLSearchParams({
            email: email.current.value,
            password: password.current.value,
          }), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        });
        navigate('/home');
        dispatch(toggleButton());
        dispatch(addUser(email.current.value));
        console.log('Login successful:', response.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          setErrMessage('Incorrect password. Please try again.');
        } else {
          setErrMessage('Email or password is incorrect');
        }
      }
    }
  };

  const handleSignUp = async () => {
    const message = validateFormData(
      name.current.value,
      email.current.value,
      password.current.value
    );
    if (message) {
      setErrMessage(message);
    } else {
      try {
        const response = await axios.post('http://localhost:8082/signUp', {
          name: name.current.value,
          email: email.current.value,
          password: password.current.value,
        });
        navigate('/home');
        dispatch(toggleButton());
        console.log('Sign up successful:', response.data);
      } catch (error) {
        if (error.response && error.response.status === 400) {
          setErrMessage('Email already exists. Please try logging in.');
        } else {
          setErrMessage('Email already exists. Please try logging in.');
        }
      }
    }
  };

  return (
    <div className="login_conatiner">
      <div className="login_image_container">
        <img className="login_photo" src={Login_image} alt="" />
      </div>
      <div className="login_flex_container">
        <form className="login_form" onSubmit={(e) => e.preventDefault()}>
          <p className="login_text">
            {toggleSignInForm ? "Sign In" : "Sign Up"}
          </p>
          {!toggleSignInForm && (
            <input type="text" placeholder="Name" className="input_login" ref={name}/>
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="input_login"
            ref={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="input_login"
            ref={password}
          />
          <p className="error_message">{errMessage}</p>
          <button className="login_button" onClick={toggleSignInForm ? handleSignIn : handleSignUp}>
            {toggleSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="login_bottom_text"
            onClick={() => setToggleSignInForm(!toggleSignInForm)}
          >
            {toggleSignInForm
              ? "New to FoodWeb? SignUp Now"
              : "Already have a account? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login3;