/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Checkbox } from 'antd';
// import { Dropdown } from 'primereact/dropdown';
import axios from '../../../helpers/axios';
import Button from '../../ReUsable/button';
import { ReactComponent as Close } from '../../../assets/close.svg';
import { camera, deleteImg } from '../Constants/images';
import getAllVendors from '../../../redux/actions/vendors.actions';
import { Body, Heading } from './styles';

export const ViewVendorModal = (props) => {
  const { data, showView, handleView } = props;
  return (
    <Modal visible={showView} closable={false} width={658} footer={null}>
      <Heading className="views">
        <h3>Vendor details</h3>
        <div className="button_group">
          <Close onClick={(handleView)} />
        </div>
      </Heading>
      <Body>
        {data && (
        <>
          <img src={data.image} alt="" />
          <div className="items">
            <h3>
              Store Type
              :
            </h3>
            <span>{data.category}</span>
          </div>
          <div className="items">
            <h3>
              Store Name
              :
            </h3>
            <span>{data.storeName}</span>
          </div>
          <div className="items">
            <h3>
              Email
              :
            </h3>
            <span>{data.email}</span>
          </div>
          <div className="items">
            <h3>
              Phone
              :
            </h3>
            <span>{data.phone}</span>
          </div>
          <div className="items">
            <h3>
              Street Address
              :
            </h3>
            <span>{data.address}</span>
          </div>
          <div className="items">
            <h3>
              City
              :
            </h3>
            <span>{data.city}</span>
          </div>
          <div className="items">
            <h3>
              State
              :
            </h3>
            <span>{data.state}</span>
          </div>
        </>
        )}
      </Body>
    </Modal>
  );
};
export const DeleteVendorModal = (props) => {
  const dispatch = useDispatch();
  const { email, showDelete, handleDelete } = props;
  // const { showDelete, handleDelete } = props;
  const deleteVendor = async () => {
    // e.preventDefault();
    axios.delete(`/vendor/${email}`)
      .then((res) => (res.data));
    dispatch(getAllVendors());
  };
  return (
    <Modal visible={showDelete} width={388} closable={false} footer={null}>
      <Heading className="delete">
        <div>
          <img src={deleteImg} alt="" />
        </div>

        <h3>Would you like to delete this Vendor?</h3>
      </Heading>
      <Body>
        <span>
          You are trying to delete an Vendor. would you like to delete this
          Vendor?
        </span>
        <div className="dont_ask">
          <Checkbox />
          <span>Dont ask me again</span>
        </div>
        <div className="button_group">
          <Button onClick={handleDelete} text="NO, CANCEL" />
          <Button onClick={() => deleteVendor(email)} text="YES, DELETE" />
        </div>
      </Body>
    </Modal>
  );
};

export const AddCustomerModal = (props) => {
  const { showAdd, handleAdd } = props;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [storeName, setStoreName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <Modal visible={showAdd} closable={false} width={450} footer={null}>
      <Heading className="views">
        <h3>Add Vendor</h3>
        <div className="button_group">
          <Close onClick={handleAdd} />
        </div>
      </Heading>
      <Body>
        <div className="wrapper">
          <div className="form-field">
            <form action="">
              <img src={camera} alt="" srcSet="" />
              <div>
                <p>firstName</p>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} name="" id="" placeholder="Restaurant" />
              </div>
              <div>
                <p>LastName</p>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} name="" id="" placeholder="Store Name" />
              </div>
              <div>
                <p>Email</p>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="" id="" placeholder="Email" />
              </div>
              <div>
                <p>Password</p>
                <input type="pasword" value={password} onChange={(e) => setPassword(e.target.value)} name="" id="" placeholder="Email" />
              </div>
              <div>
                <p>Phone Number</p>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} name="" id="" placeholder="0000000000000" />
              </div>
              <div>
                <p>Street Address</p>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} name="" id="" placeholder="Address" />
              </div>
              <div>
                <p>Store Name</p>
                <input type="text" value={storeName} onChange={(e) => setStoreName(e.target.value)} name="" id="" placeholder="Address" />
              </div>
              <div>
                <p>Description</p>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} name="" id="" placeholder="Address" />
              </div>
              <button type="submit">SAVE</button>
            </form>
          </div>
        </div>
      </Body>
    </Modal>
  );
};
