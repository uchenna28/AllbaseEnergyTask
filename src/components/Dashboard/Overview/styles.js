import styled from 'styled-components';

export default styled.div`
  margin: 0;
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  @media screen and (max-width: 580px) {
    grid-template-columns: 1fr;
    padding: 20px auto;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  max-height: 150px;
  height: 120px;
  padding: 8px;
  box-shadow: 4px 0px 20px rgba(0, 0, 0, 0.08);
  strong {
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 18px;
    color: #3333;
  }
  
  

    .negative {
      color: #eb5757;
    }
    .positive {
      color: #16cb5d;
    }

    .arrows {
      margin-right: 10px;
    }
  }

  .card_icon {
    margin-right: 10px;
    p{
      font-family: HK Grotesk;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      color: #384C74;
    }
    
  }
`;

export const TableWrapper = styled.div`
  margin: 30px auto;
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  grid-gap: 10px;
  font-size:14px !important;
  @media screen and (max-width: 580px) {
    grid-template-columns: 1fr;
    padding: 20px auto;
  }
  .column1 {
    .table_wrapper {
      min-height: 40vh;
      background-color: #fff;
      margin: 5px;
      border-radius: 10px;
      box-shadow: 4px 0px 20px rgba(0, 0, 0, 0.08);
    }
    .table_header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      p {
        font-style: normal;
        font-weight: bolder;
        font-size: 18px;
        line-height: 20px;
        letter-spacing: 0.03em;
        color: #4f4f4f;
      }
      @media screen and (max-width: 580px) {
        font-size: 13px;
      }
    }
  }
 
    }
    
  }
`;




