import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BackArrow from '../assets/back_arrow.svg';

export default function noteDetail(props) {
  const notification = props.location.state;
  return (
    <Container>
      <Wrapper>
        <Link to="/notifications" style={{ color: '#333333' }}>
          <Button>
            <img src={BackArrow} alt="Back arrow" />
            {' '}
            Back
          </Button>
        </Link>
        <Details>
          <Date>{notification.date}</Date>
          <NoteBody>
            <Title>{notification.title}</Title>
            <Description>{notification.description}</Description>
            <TimePiece>{notification.time}</TimePiece>
          </NoteBody>
        </Details>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 470px;
  background: #ffffff;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
`;

const Wrapper = styled.div`
  width: 80%;
  height: 430px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 10px auto;
`;

const Button = styled.button`
  background: #ffffff;
  font-size: 13px;
  border: 1px solid #828282;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 5px;
  margin: 1rem;
  width: 78px;
`;

const Details = styled.div`
  width: 92%;
  height: 120px;
  margin: 1rem auto;
  background: #ffffff;
  border-radius: 5px;
`;

const NoteBody = styled.div`
  width: 100%;
  height: fit-content;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.09);
  padding: 10px 10px 20px 10px;
`;

const Date = styled.div`
  margin: 2px;
  text-align: center;
  font-size: 12px;
`;

const Title = styled.div`
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 3px;
`;

const Description = styled.div`
  margin-top: 0;
  font-size: 13px;
  color: #4f4f4f;
`;

const TimePiece = styled.div`
  text-align: end;
  font-size: 11px;
`;
