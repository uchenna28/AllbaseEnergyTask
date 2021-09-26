import styled from 'styled-components';

export default styled.div`
  margin: 0;

  .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;

    h3 {
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0.03em;
      color: #333333;
    }
  }

  .main {
    background: #fff;
    padding: 20px;
    margin: 20px 0;
    border-radius: 15px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    .profile_picture {
      .wrapper {
        text-align: center;
        border: 1px solid #e5e5e5;
        border-radius: 5px;
        color: #4f4f4f;
        min-height: 299px;
        height: 299px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      img {
        width: 150px;
        height: 150px;
        cursor: pointer;
        margin: 0 0 20px;
      }

      h3,
      p {
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 18px;
      }
    }

    .notification {
        p{
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 18px;
      }
      .wrapper {
        border: 1px solid #e5e5e5;
        border-radius: 3px;
        color: #4f4f4f;
        min-height: 299px;
        padding: 20px;
      }
    }

    .form-field {
      font-style: normal;
      font-weight: 600;
      line-height: 18px;
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

        form {
          p {
            margin-bottom: 5px;
          }
        }
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
      }
    }
  }
`;

export const Options = styled.div`
  border: 1px solid #e5e5e5;
  padding: 5px 20px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .text {
    font-style: normal;
    color: #4f4f4f;
    h4 {
      font-size: 13px;
      line-height: 16px;
      font-weight: 600;
    }
    h6 {
      font-size: 11px;
      line-height: 16px;
      font-weight: 500;
    }
  }

  .icon{
      color:red;
  }
`;
