/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Tabs, DatePicker, Spin } from 'antd';
import Container from './styles';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './table';
import { getAllOrders } from '../../../redux/actions/order.actions';
import '../../../App.css';

const Index = () => {
  const orders = useSelector((state) => state.orderList.orders);
  const isOrderLoading = useSelector((state) => state.orderList.isOrderLoading);
  const error = useSelector((state) => state.orderList.error);
  const [filterOrders, setFilterOrders] = useState([]);
  // Filter Orders function
  function handleFilter(tab) {
    const newOrders = [...orders].filter((element) => element.status === tab);
    setFilterOrders(newOrders);
  }
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  const { TabPane } = Tabs;
  const operations = <DatePicker />;
  return (
    <Container>
      <div className="heading">
        <h3>Orders</h3>
        <div className="counter">
          <small>{orders ? orders.length : ''}</small>
        </div>
      </div>
      <div className="table_header">
        <Tabs
          tabBarExtraContent={operations}
          style={{ marginLeft: 10 }}
          defaultActiveKey="All"
          onChange={handleFilter}
        >
          <TabPane tab="All" key="All">
            {isOrderLoading ? (
              <ErrorText>
                <Spin tip="Loading..." />
              </ErrorText>
            ) : (
              [error ? <ErrorText>{error}</ErrorText> : <Table data={orders} />]
            )}
            {/* <Table data={orders} /> */}
          </TabPane>
          <TabPane tab="Pending" key="pending">
            <Table data={filterOrders} />
          </TabPane>
          <TabPane tab="Enroute" key="enroute">
            <Table data={filterOrders} />
          </TabPane>
          <TabPane tab="Delivered" key="delivered">
            <Table data={filterOrders} />
          </TabPane>
          <TabPane tab="Cancelled" key="canceled">
            <Table data={filterOrders} />
          </TabPane>
        </Tabs>
      </div>
    </Container>
  );
};

export default Index;

const ErrorText = styled.p`
  font-size: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
