import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Menu, Dropdown } from 'antd';
import { useHistory, Link } from 'react-router-dom';
import Container, { NavItems, Toggle } from './_styles.modules';
import user from '../../../assets/user.png';
import emailIcon from '../../../assets/emailIcon.png';
import notificationIcon from '../../../assets/notificationIcon.png';
import { ReactComponent as DropDownIcon } from '../../../assets/chevrondown.svg';
import { ReactComponent as Notification } from '../../../assets/notification.svg';
import { ReactComponent as NotificationEmpty } from '../../../assets/notification_empty.svg';
// import CustomButton from '../../ReUsable/button';
import { logout, profileIcon } from '../../Dashboard/Constants/images';

const Navbar = ({onToggle}) => {
  const navigator = useHistory();
  // const email = useSelector((state) => state.auth.email);
  // console.log(email);
  const notificationList = useSelector(
    (state) => state.notificationList.notifications,
  );

  const signout = () => {
    localStorage.clear();
    navigator.push('/signup');
  };

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <img src={profileIcon} alt="Icon" />
        <span style={{ marginLeft: 10 }}>Profile</span>
      </Menu.Item>
      <Menu.Item key="1" onClick={signout}>
        <img src={logout} alt="Icon" />
        <span style={{ color: '#BE0019', marginLeft: 10 }}>Logout</span>
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
