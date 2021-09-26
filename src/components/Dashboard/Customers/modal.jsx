/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Checkbox, Radio } from 'antd';
import axios from '../../../helpers/axios';
import Button from '../../ReUsable/button';
import { ReactComponent as Close } from '../../../assets/close.svg';
import { deleteImg, orderImg } from '../Constants/images';
import { Body, Heading } from './styles';
import { getAllCustomers } from '../../../redux/actions/customers.action';
// import validation from './validation';

export const AddCustomerModal = (props) => {
  const { showAdd, handleAdd } = props;
  const [value, setValue] = useState('male');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const onChange = (e) => {
    setValue(e.target.value);
  };
  // const [errors, setErrors] = useState({});
  const addCustomer = async (e) => {
    e.preventDefault();
    // setErrors(validation[value]);
    const costumerObj = {
      firstName,
      lastName,
      email,
      password,
      phone,
      gender: value,
    };
    axios.post('/customer/signUp', costumerObj)
      .then((res) => (res.data));
  };
  return (
    <Modal visible={showAdd} closable={false} width={498} footer={null}>
      <Heading className="views">
        <h3>Add Customer</h3>
        <div className="button_group">
          <Close onClick={handleAdd} />
        </div>
      </Heading>
      <Body>
        <div className="form-field">
          <form action="" onSubmit={addCustomer}>
            <div>
              <p>First Name</p>
              <input type="text" name="" value={firstName} onChange={(e) => setFirstName(e.target.value)} id="" placeholder="First Name" min="4" max="10" required />
            </div>
            <div>
              <p>Last Name</p>
              <input type="text" name="" value={lastName} onChange={(e) => setLastName(e.target.value)} id="" placeholder="Last Name" min="4" max="10" required />
            </div>
            <div>
              <p>Email</p>
              <input type="email" name="" id="" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
              {/* {errors.email && <p className="error">{errors.email}</p>} */}
            </div>
            <div>
              <p>Password</p>
              <input type="password" name="" value={password} onChange={(e) => setPassword(e.target.value)} id="" placeholder="#h1255gt" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" title="Must contain at least one number and one uppercase and lowercase letter, one special character and at least 8 or more characters" required />
              {/* {errors.password && <p className="error">{errors.password}</p>} */}
            </div>
            <div>
              <p>Phone</p>
              <input type="number" name="" id="" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
              {/* {errors.phone && <p className="error">{errors.phone}</p>} */}
            </div>
            <div>
              <p>Gender</p>
              <div className="radio-group">
                <Radio.Group value={value} onChange={onChange}>
                  {[{ name: 'male' }, { name: 'female' }].map((item) => (
                    <div className="radio">
                      <Radio value={item.name} />
                      {' '}
                      <span>{item.name}</span>
                    </div>
                  ))}
                </Radio.Group>
              </div>
            </div>
            <button type="submit">SAVE</button>
          </form>
        </div>
      </Body>
    </Modal>
  );
};
export const ViewCustomerModal = (props) => {
  const { data, showView, handleView } = props;
  return (
    <Modal visible={showView} closable={false} width={658} footer={null}>
      <Heading className="views">
        <h3>Customer details</h3>
        <div className="button_group">
          <Close onClick={(handleView)} />
        </div>
      </Heading>
      <Body>
        <img src={orderImg} alt="" />
        {data && (
          <>
            <div className="items">
              <h3>
                Customer Name
                :
              </h3>
              <span>{data.name}</span>
            </div>
            <div className="items">
              <h3>
                Customer Email
                :
              </h3>
              <span>{data.email}</span>
            </div>
            <div className="items">
              <h3>
                Customer Phone
                :
              </h3>
              <span>{data.phone}</span>
            </div>
            <div className="items">
              <h3>
                Customer Address
                :
              </h3>
              <span>{data.address}</span>
            </div>
          </>
        )}
      </Body>
    </Modal>
  );
};

export const DeleteCustomerModal = (props) => {
  const dispatch = useDispatch();
  const { email, showDelete, handleDelete } = props;
  // const { showDelete, handleDelete } = props;
  const deleteCustomer = async () => {
    // e.preventDefault();
    axios.delete(`/customer/${email}`)
      .then((res) => (res.data));
    dispatch(getAllCustomers());
  };
  return (
    <Modal visible={showDelete} width={388} closable={false} footer={null}>
      <Heading className="delete">
        <div>
          <img src={deleteImg} alt="" />
        </div>
        <h3>Would you like to delete this customer?</h3>
      </Heading>
      <Body>
        <span>
          You are trying to delete an customer. would you like to delete this
          customer?
        </span>
        <div className="dont_ask">
          <Checkbox />
          <span>Dont ask me again</span>
        </div>
        <div className="button_group">
          <Button onClick={handleDelete} text="NO, CANCEL" />
          <Button onClick={() => deleteCustomer(email)} showDelete={false} text="YES, DELETE" />
        </div>
      </Body>
    </Modal>
  );
};
