/* eslint-disable react/no-array-index-key */
import React from 'react';
import Container, { Options } from './styles';
import Searchbar from '../../ReUsable/searchbar';
import { avatarOutline } from '../Constants/images';
import options from './data';

const index = () => (
  <Container>
    <div className="heading">
      <h3>Settings</h3>
      <div>
        <Searchbar />
      </div>
    </div>
    <div className="main">
      <div className="profile_picture">
        <p>Add Profile Picture</p>
        <div className="wrapper">
          <img src={avatarOutline} alt="Icon" />
          <h3>Add profile picture or an avatar</h3>
        </div>
      </div>
      <div className="change_password form-field">
        <p>Change Password</p>
        <div className="wrapper">
          <form action="">
            <div>
              <p>Current Password</p>
              <input type="password" name="" id="" />
            </div>
            <div>
              <p>New Password</p>
              <input type="password" name="" id="" />
            </div>
            <div>
              <p>Confirm Password</p>
              <input type="password" name="" id="" />
            </div>
          </form>
        </div>
      </div>
      <div className="add_profile form-field">
        <p>Add Profile</p>
        <div className="wrapper">
          <form action="">
            <div>
              <p>First Name</p>
              <input type="text" name="" id="" />
            </div>
            <div>
              <p>Last Name</p>
              <input type="text" name="" id="" />
            </div>
            <div>
              <p>Phone Number</p>
              <input type="number" name="" id="" />
            </div>
            <div>
              <p>Email</p>
              <input type="email" name="" id="" />
            </div>
          </form>
        </div>
        <button type="submit">SAVE CHANGES</button>
      </div>
      <div className="notification">
        <p>Notification</p>
        <div className="wrapper">
          {options.map((item, i) => (
            <Options key={i}>
              <div className="text">
                <h4>{item.title}</h4>
                <h6>{item.subtitle}</h6>
              </div>
              <div className="icon">
                {item.icon}
              </div>
            </Options>
          ))}
        </div>
      </div>
    </div>
  </Container>
);

export default index;
