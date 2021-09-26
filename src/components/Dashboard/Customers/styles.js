import styled from 'styled-components';

export default styled.div`
  margin: 0;

  .top_header {
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .heading {
      display: flex;
      ${'' /* justify-content: flex-start; */}
      align-items: center;
      letter-spacing: 0.03em;
      margin: 0 0 30px;
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

    .heading1 {
      display: flex;
      column-gap:20px;
    }
  }

  .table_wrapper {
    background-color: #fff;
    padding: 5px;
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

  input {
    padding: 5px 10px;
    margin-bottom: 20px;
    width: 100%;
    min-height: 40px;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    font-size: 1em;
    :focus {
      outline: none;
      border: 1px solid #eb5757;
    }
  }

  .radio-group {
      display: flex !important;
      column-gap: 20px;
    }

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

  form {

    p{
      margin:0 0 5px;
      padding:0;
    }
      span {
        color: #4f4f4f;
      }
    }

    button {
      margin-top: 20px;
      width: 100%;
      border: none;
      background: #eb5757;
      color: #fff;
      padding: 10px 0;
      border-radius: 5px;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.25);

      :hover {
        transform: scale(1.02);
      }
    }
    h3,
    p {
      font-size: 15px;
    }
    .wrapper {
      border: 1px solid #e5e5e5;
      border-radius: 3px;
      color: #4f4f4f;
      min-height: 299px;
      padding: 20px;
    }
  }
`;
