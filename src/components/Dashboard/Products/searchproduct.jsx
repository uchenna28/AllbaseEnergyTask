import React from 'react';
// import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../../assets/searchicon.svg';

const SearchBar = styled.div`
  width: 100%;
  form {
    display: flex;
    align-items: center;
    position: relative;
    height: 2.8rem;

    .icon {
      position: absolute;
      font-size: 1.2rem;
      transfrom: translateY(-50%);
      margin-left: 1em;
    }

    input {
      background: transparent;
      border: 1px solid #272b4a;
      padding-left: 3.5em;
      height: 100%;
      border: 1px solid #bdbdbd;
      border-radius: 5px;
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 142.9%;
      letter-spacing: 0.018em;
      color: #000000;

      :focus{
        outline:none;
        border:1px solid #EB5757;
      }
    }
  }
`;
const Searchbar = () => {
  <SearchBar>
    <form action="">
      <SearchIcon className="icon" />
      <input type="text" placeholder="Search" />
    </form>
  </SearchBar>;
};

export default Searchbar;
