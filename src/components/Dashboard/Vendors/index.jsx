/* eslint-disable import/named */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin, Tabs } from 'antd';
import styled from 'styled-components';
import Container from './styles';
import 'antd/dist/antd.css';
import Searchbar from '../../ReUsable/searchbar';
import CustomButton from '../../ReUsable/button';
import { plusIcon } from '../Constants/images';
import Table from './tables';
import { AddCustomerModal } from './modals';
import getAllVendors from '../../../redux/actions/vendors.actions';
import '../../../App.css';

const Vendors = () => {
  const [isAddModal, setIsAddModal] = useState(false);

  function handleMenuClick(e) {
    if (e.key === '1') {
      // setIsViewModal(true);
    } else if (e.key === '2') {
      // setIsDeleteModal(true);
    }
  }
  const { TabPane } = Tabs;
  const operations = (
    <span className="heading1">
      <div>
        <Searchbar />
      </div>
      <div>
        <CustomButton
          text="Add Vendor"
          icon={plusIcon}
          onClick={() => setIsAddModal(true)}
        />
      </div>
    </span>
  );

  const dispatch = useDispatch();

  const vendors = useSelector((state) => state.vendorList.vendors);

  const isLoadingVendor = useSelector((state) => state.vendorList.isLoading);
  const isError = useSelector((state) => state.vendorList.error);

  useEffect(() => {
    dispatch(getAllVendors());
  }, []);

  return (
    <Container>
      <div className="top_header">
        <div className="heading">
          <h3>Vendors</h3>
          <div className="counter">
            <small>{vendors.length}</small>
          </div>
        </div>
      </div>
      <div className="table-header">
        <Tabs tabBarExtraContent={operations}>
          <TabPane tab="All" key="All">
            {isLoadingVendor ? (
              <ErrorText>
                <Spin tip="Loading..." />
              </ErrorText>
            ) : (
              [
                isError ? (
                  <ErrorText>{isError}</ErrorText>
                ) : (
                  <Table data={vendors} handleMenuClick={handleMenuClick} />
                ),
              ]
            )}
          </TabPane>
          <TabPane tab="Category" key="Category">
            {isLoadingVendor ? (
              <ErrorText>
                <Spin tip="Loading..." />
              </ErrorText>
            ) : (
              [
                isError ? (
                  <ErrorText>{isError}</ErrorText>
                ) : (
                  <Table data={vendors} handleMenuClick={handleMenuClick} />
                ),
              ]
            )}
          </TabPane>
        </Tabs>
      </div>

      {/* Modals */}
      <AddCustomerModal
        showAdd={isAddModal}
        handleAdd={() => setIsAddModal(false)}
      />
    </Container>
  );
};

export default Vendors;

const ErrorText = styled.p`
  font-size: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
