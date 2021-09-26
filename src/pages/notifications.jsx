import React, { useEffect } from 'react';
import { Spin } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import getAllNotifications from '../redux/actions/notifications.actions';
import NoteCard from '../components/ReUsable/noteCard';
import { formatDate, formatTime } from '../helpers/formatDate';
import '../App.css';

export default function NotificationPage() {
  const notifications = useSelector(
    (state) => state.notificationList.notifications,
  );
  const isLoading = useSelector((state) => state.notificationList.isLoading);
  const error = useSelector((state) => state.notificationList.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNotifications());
  }, []);

  return (
    <Container>
      <Wrapper>
        <TextHeader>Notifications</TextHeader>
        <Notifications>
          {isLoading ? (
            <ErrorText>
              <Spin tip="Loading..." />
            </ErrorText>
          ) : (
            [
              error ? (
                <ErrorText>{error}</ErrorText>
              ) : (
                notifications.map((notification) => (
                  <Link
                    to={{
                      pathname: `/note-details/${notification.id}`,
                      state: notification,
                    }}
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <NoteCard
                      key={notification.id}
                      date={formatDate(notification.createdAt)}
                      title={notification.title}
                      description={notification.description}
                      time={formatTime(notification.createdAt)}
                    />
                  </Link>
                ))
              ),
            ]
          )}
        </Notifications>
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
  margin: auto;
`;

const TextHeader = styled.p`
  font-family: 'Monserrat';
  font-weight: bold;
  color: #333333;
`;

const Wrapper = styled.div`
  width: 80%;
  height: 450px;
  margin: auto;
`;
const Notifications = styled.div`
  width: 100%;
  height: 405px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 5px;
  overflow: auto;
  position: relative;
`;

const ErrorText = styled.p`
  font-size: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
