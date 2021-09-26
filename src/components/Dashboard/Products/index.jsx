/* eslint-disable import/named */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Container from './styles';
import 'antd/dist/antd.css';
import '../../../App.css';

const Products = () => {
  return (
    <Container>
      <div className="top_header">
        <div className="heading">
          <h3>Products</h3>
        </div>
      </div>
      
    </Container>
  );
};

export default Products;

