import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
position:relative;
left:250px;
top:80px;
width:calc(100vw - 250px);
padding: 30px 40px;
background:#fbfbfb;
min-height:calc(100vh);

@media screen and (max-width:580px){
    left:0;
    width:100vw;
    overflow-x:hidden;
}
`;

const Main = ({ children }) => (
  <Container>
    {children}
  </Container>
);

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;
