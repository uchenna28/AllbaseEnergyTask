import styled from 'styled-components';

export default styled.div`
  margin: 0;

  .heading {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    letter-spacing: 0.03em;
    margin: 0 auto 30px;
    h3 {
      margin: 0 10px 0 0;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 20px;
    }

    .counter {
      border: 1px solid #828282;
      box-sizing: border-box;
      border-radius: 4px;
      padding: 5px 10px;

      small {
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 18px;
      }
    }
  }
  .table_wrapper {
    min-height: 30vh;
    background-color: #fff;
    margin:2px;
    border-radius: 10px;
    box-shadow: 4px 0px 20px rgba(0, 0, 0, 0.08);
  }
`;

export const Heading = styled.div`
  display: flex;
  color: #333333;
  align-items: center;
  justify-content: space-between;

  .delete {
    justify-content: flex-start;
    column-gap: 20px;
  }

  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;

    span {
      color: #eb5757;
    }
  }
  .button_group {
    display: flex;
    column-gap: 20px;
    align-items: center;
    cursor: pointer;
  }
`;

export const Body = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  padding: 15px;
  margin: 10px 0;

  img {
    border-radius: 5px;
    max-width: 116px;
    max-height: 116px;
    margin-bottom: 20px;
  }

  .items {
    padding: 8px 0;
    display: flex;
    align-items: center;
    font-style: normal;
    line-height: 20px;
    border-bottom: 1px solid #e5e5e5;
    h3 {
      margin: 0;
      padding: 0;
      font-weight: 500;
      font-size: 14px;
    }
    span {
      margin-left: 10px;
      color: #333333;
    }
  }

  .dont_ask {
    display: flex;
    margin: 20px 0 40px;
    align-items: center;
    column-gap: 20px;
  }

  .button_group {
    display: flex;
    column-gap: 20px;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  .radio {
    display: flex;
    align-items: center;
    column-gap: 10px;
    margin-bottom: 10px;
    font-size: 15px;
    span {
      color: #4f4f4f;
    }
  }
`;
