import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
display:flex;
justify-content:center;
align-items:center;
background-color: #EB5757;
border-radius: 5px;
max-width:300px;
height:40px;
border:none;
font-style: bolder;
font-weight: 900;
font-size: 14px;
line-height: 17px;
letter-spacing: 0.04em;
text-transform: uppercase;
padding:0 20px;
color: #FFFFFF;

img{
    margin-right:15px;
}
`;

const CustomButton = ({ icon, text, onClick }) => (
  <Button onClick={onClick}>
    {icon ? <img src={icon} alt="Icon" /> : ''}
    {text}
  </Button>
);

CustomButton.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CustomButton;
