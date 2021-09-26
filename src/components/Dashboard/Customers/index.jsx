/* eslint-disable import/named */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'antd/dist/antd.css';
import { Spin } from 'antd';
import Container from './styles';
import Searchbar from '../../ReUsable/searchbar';
// import axios from '../../../helpers/axios';
import CustomButton from '../../ReUsable/button';
import { plusIcon } from '../Constants/images';
import Table from './table';
import { AddCustomerModal } from './modal';
import { getAllCustomers } from '../../../redux/actions/customers.action';
import ErrorText from '../../ReUsable/errorText';
import '../../../App.css';
// import { USER_PER_PAGE } from '../../../utils/constants';

const Index = () => {
  const customer = useSelector((state) => state.customerList.customer);
  // const totalPages = useSelector((state) => state.customerList.totalPages);
  const isLoading = useSelector((state) => state.customerList.isLoading);
  const error = useSelector((state) => state.customerList.error);
  // const [page, setPage] = useState(1);
  // const hasNextPage = useSelector((state) => state.customerList.hasNextPage);
  const [isAddModal, setIsAddModal] = useState(false);
  // console.log(page);
  // console.log(totalPages);
  function handleMenuClick(e) {
    if (e.key === '1') {
      // setIsViewModal(true);
    } else if (e.key === '2') {
      // setIsDeleteModal(true);
    }
  }
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [result, setResult] = useState([]);
  const searchFilter = () => {
    const filterData = [...customer].filter((obj) => Object.keys(obj).some((key) => String(obj[key])
      .toLowerCase().includes(value.toLowerCase())));
    if (filterData.length === 0) {
      return result;
    }
    return setResult(filterData);
  };
  // const getCustomers = () => {
  // };
  useEffect(() => {
    dispatch(getAllCustomers());
  }, []);
  return (
    <Container>
      <div className="top_header">
        <div className="heading">
          <h3>Customers</h3>
          <div className="counter">
            <small>{customer ? customer.length : ''}</small>
          </div>
        </div>
        <div className="heading1">
          <div>
            <Searchbar
              handleClick={() => searchFilter(value)}
              onTextChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div>
            <CustomButton
              icon={plusIcon}
              text="Add Customer"
              onClick={() => setIsAddModal(true)}
            />
          </div>
        </div>
      </div>
      {isLoading ? (
        <ErrorText>
          <Spin tip="Loading..." />
        </ErrorText>
      ) : (
        [
          error ? (
            <ErrorText>{error}</ErrorText>
          ) : (
            <Table
              data={customer}
              handleMenuClick={handleMenuClick}
              // page={page}
              // setPage={setPage}
              // hasNextPage={hasNextPage}
            />
          ),
        ]
      )}
      {/* <Table data={customer} handleMenuClick={handleMenuClick} /> */}

      {/* Modals */}
      <AddCustomerModal
        showAdd={isAddModal}
        handleAdd={() => setIsAddModal(false)}
      />
    </Container>
  );
};

export default Index;
