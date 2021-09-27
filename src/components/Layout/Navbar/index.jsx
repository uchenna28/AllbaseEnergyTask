import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Menu, Dropdown } from 'antd';
import { useHistory, Link } from 'react-router-dom';
import Container, { NavItems, Toggle } from './_styles.modules';
import user from '../../../assets/user.png';
import emailIcon from '../../../assets/emailIcon.png';
import notificationIcon from '../../../assets/notificationIcon.png';
import { logout, profileIcon } from '../../Dashboard/Constants/images';

const Navbar = ({onToggle}) => {

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <img src={profileIcon} alt="Icon" />
        <span style={{ marginLeft: 10 }}>Profile</span>
      </Menu.Item>
    </Menu>
  );
  const [scrolled, setScrolled] = useState(false);

  const handleNavScroll = () => {
    if (window.scrollY >= 20) {
      setScrolled(true);
    } else setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleNavScroll);
  }, []);

  return (
    <Container isScrolled={scrolled}>
      <NavItems>
      <Toggle onClick={onToggle}/>
      <div className="notification">
        <img src={emailIcon} alt="Avatar" />
        </div>
        <div className="notification">
        <img src={notificationIcon} alt="Avatar" />
        </div>
        <img src={user} alt="Avatar" />
        
      </NavItems>
    </Container>
  );
};

export default Navbar;
