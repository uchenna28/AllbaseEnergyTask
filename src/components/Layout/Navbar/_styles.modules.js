import styled from 'styled-components';
import { FaBars } from "react-icons/fa";

export default styled.div`
  background-color: #fff;
  height: 77px;
  width: calc(100vw - 220px);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 250px;
  border-bottom: 1px solid #e5e5e5;
  box-shadow: ${({ isScrolled }) => (isScrolled ? 'rgba(60, 64, 67, 0.3) 0px 4px 2px -2px' : null)};

  @media screen and (max-width: 580px) {
    width: 100vw;
    left: 0;
  }
`;

export const NavItems = styled.div`
  height: 100%;
  display: flex;
  ${'' /* margin: 25px auto; */}
  justify-content: flex-end;
  align-items: center;
  margin-right: 120px;

  .download {
    margin-right: 50px;
  }

  .notification { 
    display:flex;
    margin-right: 30px;

    a{
      text-decoration:none !important;
    }
    span {
      display:flex !important;
      margin-left:10px;
      margin-bottom:-6px;
      background: #eb5757;
      padding:2.5px 5px;
      border-radius:50%;
      font-size:11px;
      font-weight:900;
      color:#fff;
    }
  }
  .profile_details {
    margin-left: 20px;
    display: flex;
    flex-direction: column;

    p {
      margin: 0;
      font-size: 20px;
      font-weight: 900;
    }

    small {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 13px;
    }
  }

  
`;

export const Toggle = styled(FaBars)`
  color: red;
  font-size: 2rem;
  font-weight: normal;
  padding-left: 10px;
  cursor:pointer;

  // @media screen and (min-width:580px){
    display:none;
    }
`;
