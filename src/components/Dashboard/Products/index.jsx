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
import Table from './table';
import { AddProductModal } from './modals';
import getAllVendors from '../../../redux/actions/vendors.actions';
import '../../../App.css';

const Products = () => {
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
          text="Add Product"
          icon={plusIcon}
          onClick={() => setIsAddModal(true)}
        />
      </div>
    </span>
  );

  const dispatch = useDispatch();

  // const vendors = useSelector((state) => state.vendorList.vendors);
  const products = [{
    category: "SUPERMARKET",
createdAt: "2021-09-14T19:28:21.694Z",
currentPrice: "704464.00",
image: "https://res.cloudinary.com/dk0kwdr7b/image/upload/v1623514220/1_1_4_milrh2.png",
name: "Coco Pops",
slug: "80cea234-8061-479d-a5ec-da766088ee8f",
subCategory: "FOOD CUPBOARD"
  },
{
  category: "SUPERMARKET",
createdAt: "2021-09-14T19:28:21.694Z",
currentPrice: "128101.00",
image: "https://res.cloudinary.com/dk0kwdr7b/image/upload/v1623514220/1_phcrxg.png",
name: "Honey Bunch of Oats",
slug: "6ad7c30a-e3bd-41f1-8cd3-31a1a2740c35",
subCategory: "FOOD CUPBOARD"
}]
  const isLoadingVendor = useSelector((state) => state.vendorList.isLoading);
  const isError = useSelector((state) => state.vendorList.error);

  useEffect(() => {
    dispatch(getAllVendors());
  }, []);

  return (
    <Container>
      <div className="top_header">
        <div className="heading">
          <h3>Products</h3>
          <div className="counter">
            <small>{products.length}</small>
          </div>
        </div>
      </div>
      <div className="table-header">
        <Tabs tabBarExtraContent={operations}>
          <TabPane tab="All" key="All">
          <Table data={products} handleMenuClick={handleMenuClick} />
            {/* {isLoadingVendor ? (
              <ErrorText>
                <Spin tip="Loading..." />
              </ErrorText>
            ) : (
              [
                isError ? (
                  <ErrorText>{isError}</ErrorText>
                ) : (
                  <Table data={products} handleMenuClick={handleMenuClick} />
                ),
              ]
            )} */}
          </TabPane>
          <TabPane tab="Category" key="Category">
          <Table data={products} handleMenuClick={handleMenuClick} />
            {/* {isLoadingVendor ? (
              <ErrorText>
                <Spin tip="Loading..." />
              </ErrorText>
            ) : (
              [
                isError ? (
                  <ErrorText>{isError}</ErrorText>
                ) : (
                  <Table data={products} handleMenuClick={handleMenuClick} />
                ),
              ]
            )} */}
          </TabPane>
        </Tabs>
      </div>

      {/* Modals */}
      <AddProductModal
        showAdd={isAddModal}
        handleAdd={() => setIsAddModal(false)}
      />
    </Container>
  );
};

export default Products;

const ErrorText = styled.p`
  font-size: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
