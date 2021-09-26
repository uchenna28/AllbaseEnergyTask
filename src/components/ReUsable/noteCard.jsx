import React from 'react';
import styled from 'styled-components';

export default function noteCard(props) {
  return (
    <NoteWrapper>
      <DateText>{props.date}</DateText>
      <Note>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
        <TimePiece>{props.time}</TimePiece>
      </Note>
    </NoteWrapper>
  );
}

const NoteWrapper = styled.div`
  width: 92%;
  height: 120px;
  margin: 1rem auto;
  background: #ffffff;
  border-radius: 5px;
`;

const DateText = styled.p`
  margin: 2px;
  text-align: center;
  font-size: 12px;
`;

const Note = styled.div`
  width: 100%;
  height: 90px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.09);
  padding: 10px 10px 20px 10px;
`;

const Title = styled.p`
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 3px;
`;

const Description = styled.p`
  margin-top: 0;
  font-size: 13px;
  color: #4f4f4f;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TimePiece = styled.p`
  text-align: end;
  font-size: 11px;
`;
