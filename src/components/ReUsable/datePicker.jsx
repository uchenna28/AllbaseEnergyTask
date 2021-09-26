import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ReactComponent as Dropdown } from '../../assets/dropdown.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  padding: 5px 20px;
  border: 1px solid #e0e0e0;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.07);
  border-radius: 5px;

  span {
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.03em;
    color: #828282;
    margin: 0 20px 0 0;
    padding: 5px 0;
  }
`;

const DatePicker = ({ onSelect }) => (
  <Container>
    <span> This Week</span>
    <Dropdown onClick={onSelect} />
  </Container>
);

DatePicker.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default DatePicker;
