import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: ${(isDefault) => (isDefault ? '250px' : '0')};
  background-color: #fff;
  z-index: 1;
  border-right:2px solid #fbfbfb;
  @media screen and (max-width: 580px) {
    // display: ${({isDefault}) => (isDefault ? "none" : "")};
    z-index: ${({isDefault}) => (isDefault ? "" : 1)};
    display: none;
  }

  .active {
    color: #33333;
    font-size: 18px;
    font-style: normal;
     background: #1EB2A6;
    ;
  }
`;

export const Logo = styled.div`
  width: 100vw;
  margin: 20px auto;

  img {
    margin: auto 50px;
  }
`;

export const SidebarTabs = styled.div`
  margin: 50px 0 0 auto;
  font-size: 23px;

  @media screen and (max-width: 900) {
    margin: 50px 10px auto;
  }
`;

// export const ActiveTab = styled.div`
//   margin: 15px auto;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   padding: 10px 0;
//   padding-left: 40px;
//   text-decoration: none;
//   color: #fff;
//   font-size: 15px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 18px;
//   letter-spacing: 0.03em;
//   text-align: left;
//   background: #eb5757;
// `;

export const Tabs = styled(Link)`
  margin: 15px auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
  padding-left: 40px;
  text-decoration: none;
  color: #000000;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.03em;
  text-align: left;

  &:hover {
    background: #1EB2A6;
    box-shadow: 1 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    font-weight: 900;
    color: #333333;
  }

  &::selection {
    color: #eb5757;
  }
`;

export const TabText = styled.span`
  padding-left: 20px;
  font-size: 16px !important;
`;
