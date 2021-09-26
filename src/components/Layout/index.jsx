import React from 'react';
import PropTypes from 'prop-types';
import Main from './Content';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => (
  <div>
    <Sidebar />
    <Navbar />
    <Main>
      {children}
    </Main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
