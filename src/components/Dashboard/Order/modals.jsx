/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Checkbox, Radio } from 'antd';
import axios from '../../../helpers/axios';
import Button from '../../ReUsable/button';
import { ReactComponent as Close } from '../../../assets/close.svg';
import { deleteImg } from '../Constants/images';
import { Body, Heading } from './styles';
import { getAllOrders } from '../../../redux/actions/order.actions';

export const ViewOrderModal = (props) => {
  const { data, showView, handleView } = props;
  return (
    <Modal visible={showView} closable={false} width={658} footer={null}>
      <Heading className="views">
        <h3>
          Order detail page (
          <span>
          &nbsp;
            {data && data.Products.length}
            {' '}
            product &nbsp;
          </span>
          )
        </h3>
        <div className="button_group">
          <Button text="Notify Vendor" />
          <Close onClick={handleView} />
        </div>
      </Heading>
      <Body>
        {data
        && data.Products.map((i) => (
          <>
            {i.Images.map((x) => (
              <img alt="logo" src={x.image} />
            ))}
            <div className="items">
              <h3>Order :</h3>
              <span>{i.name}</span>
            </div>
            <div className="items">
              <h3>Order Id :</h3>
              <span>{i.OrderProduct.id}</span>
            </div>
            <div className="items">
              <h3>Category :</h3>
              <span>{i.Category.name}</span>
            </div>
            <div className="items">
              <h3>Sub Category :</h3>
              <span>{i.SubCategory.name}</span>
            </div>
            <div className="items">
              <h3>Vendor :</h3>
              <span>{i.Vendor.storeName}</span>
            </div>
            <div className="items">
              <h3>Order Name :</h3>
              <span>{`${data.Customer.firstName} ${data.Customer.lastName}`}</span>
            </div>
            <div className="items">
              <h3>Order email :</h3>
              <span>{data.Customer.email}</span>
            </div>
            <div className="items">
              <h3>Order Address :</h3>
              <span>{data.BillingAddress.name}</span>
            </div>
          </>
        ))}
      </Body>
    </Modal>
  );
};

export const DeleteOrderModal = (props) => {
  const dispatch = useDispatch();
  const { refNo, showDelete, handleDelete } = props;
  // const { showDelete, handleDelete } = props;
  const deleteOrder = async () => {
    // e.preventDefault();
    axios.delete(`/order/${refNo}`)
      .then((res) => (res.data));
    dispatch(getAllOrders());
  };
  return (
    <Modal visible={showDelete} width={388} closable={false} footer={null}>
      <Heading className="delete">
        <div>
          <img src={deleteImg} alt="" />
        </div>
        <h3>Would you like to delete this order?</h3>
      </Heading>
      <Body>
        <span>
          You are trying to delete an order. would you like to delete this order?
        </span>
        <div className="dont_ask">
          <Checkbox />
          <span>dont ask me again</span>
        </div>
        <div className="button_group">
          <Button onClick={handleDelete} text="NO, CANCEL" />
          <Button onClick={() => deleteOrder(refNo)} showDelete={false} text="YES, DELETE" />
        </div>
      </Body>
    </Modal>
  );
};

export const UpdateOrderModal = (props) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('pending');
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const { refNo, showUpdate, handleUpdate } = props;
  const updateStatus = async () => {
    await axios.put(`/order/${refNo}`, { status: value });
    dispatch(getAllOrders());
  };
  return (
    <Modal visible={showUpdate} width={388} closable={false} footer={null}>
      <Heading className="views">
        <h3>Update Order Status</h3>
        <div>
          <Close onClick={handleUpdate} />
        </div>
      </Heading>
      <Body>
        <Radio.Group value={value} onChange={onChange}>
          {[
            { name: 'pending' },
            { name: 'enroute' },
            { name: 'delivered' },
            { name: 'cancelled' },
          ].map((item) => (
            <div className="radio">
              <Radio value={item.name} />
              <span>{item.name}</span>
            </div>
          ))}
        </Radio.Group>
        <div className="button_group">
          <Button onClick={() => updateStatus(refNo)} closable="true" text="UPDATE" />
        </div>
      </Body>
    </Modal>
  );
};
