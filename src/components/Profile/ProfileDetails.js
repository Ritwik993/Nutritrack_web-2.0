import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './PofileDetails.css'

const ProfileDetails = () => {
  const user = useSelector((store) => store.user);
  const [userDetails, setUserDetails] = useState({});
  console.log(user);

  useEffect(() => {
    if (user) {
      getUser();
    }
  }, [user]);

  const getUser = async () => {
    try {
      const response = await axios.get(`http://localhost:8082/user/${user}`);
      setUserDetails(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  return (
    <div className="profile-container">
      <h2>Profile Details</h2>
      <form className="profile-form">
        {/* <div className="form-group">
          <label htmlFor="username">Username</label>
          <span>{userDetails.username}</span>
        </div> */}
         <div className="form-group">
          <label htmlFor="name">Name</label>
          <span>{userDetails.name}</span>
          {/* <input type="text" id="name" name="name"  placeholder="Enter your name" /> */}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <span>{userDetails.email}</span>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <span>{userDetails.password}</span>
        </div>
        <div className="form-group">
          <label htmlFor="password">Phone Number</label>
          <span>{userDetails.number}</span>
        </div>
      </form>
    </div>
  );
};

export default ProfileDetails;