import React,{useState,useEffect} from 'react';
import './PofileDetails.css';
import { useSelector } from 'react-redux';
import axios from 'axios';

const ProfileDetails = () => {
  const user =useSelector((store)=>store.user);
  const [userDetails,setUserDetails]=useState({});
  console.log(user);
  useEffect(()=>{
    if(user){
      getUser();
    }
  },[user])
  const getUser=async()=>{
    const response=await axios.get(`http://localhost:8082/user/${user}`);
    setUserDetails(response.data);
    console.log(response.data);

  }
  return (
    <div className="profile-container">
      <h2>Profile Details</h2>
      <form className="profile-form">
        <div className="form-group">
          <label htmlFor="username">Name</label>
          <span>{userDetails.name}</span>
          {/* <input type="text" id="username" name="username" placeholder="Enter your username" /> */}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <span>{userDetails.password}</span>
          {/* <input type="password" id="password" name="password" placeholder="Enter your password" /> */}
        </div>
      
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <span>{userDetails.email}</span>
          {/* <input type="email" id="email" name="email" placeholder="Enter your email" /> */}
        </div>
        {/* <button type="submit" className="submit-btn">Update Profile</button> */}
      </form>
    </div>
  );
};

export default ProfileDetails;