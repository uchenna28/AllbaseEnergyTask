/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
import { Menu, Dropdown } from 'antd';
import React from 'react';
import { ReactComponent as DotMenu } from '../../../assets/menu.svg';
import { ReactComponent as View } from '../../../assets/view.svg';
import { ReactComponent as Remove } from '../../../assets/remove.svg';
import { ViewVendorModal, DeleteVendorModal } from './modals';
import { formatTime } from '../../../helpers/formatDate';

export const titleCase = (str) => {
  str = str.toLowerCase().split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
};

const menu = (
  data,
  handleClick,
  viewFunction,
  deleteFunction,
) => (
  <Menu onClick={handleClick}>
    <Menu.Item
      onClick={() => viewFunction(data)}
      icon={<View />}
      key="1"
    >
      View Vendor
    </Menu.Item>
    <Menu.Item
      onClick={() => deleteFunction(data.email)}
      icon={<Remove />}
      key="2"
    >
      Delete Vendor
    </Menu.Item>
  </Menu>
);

const Table = ({ data, handleMenuClick }) => {
  const setColor = (status) => {
    if (status === 'true') return '#16CB5D';
    if (status === 'false') return '#FC0525';
  };
  const [isViewData, setIsViewData] = React.useState(null);
  const [isEmail, setIsDeleteId] = React.useState(null);
  const [isView, setIsView] = React.useState(false);
  const [isDelete, setIsDelete] = React.useState(false);
  // Delete Order Function
  const showDeleteModal = (value) => {
    setIsDeleteId(value);
    setIsDelete(true);
  };
  // Update Order Function
  const showViewModal = (value) => {
    setIsViewData(value);
    setIsView(true);
  };
  return (
    <div className="table_wrapper">
      <table className="table">
        <thead>
          <tr className="pb-4">
            <th scope="col">Vendor</th>
            <th scope="col">#ID</th>
            <th scope="col">Category</th>
            <th scope="col">Email</th>
            <th scope="col">Last Update</th>
            <th scope="col">Approved</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((i) => (
            <tr className="">
              <td>{i.storeName}</td>
              <td>{i.id}</td>
              <td>{i.category}</td>
              <td>{i.email}</td>
              <td>{formatTime(i.updatedAt)}</td>
              <td style={{ color: setColor(i.isAdminApproved.toString()) }}>
                {titleCase(i.isAdminApproved.toString())}
              </td>
              <td>
                <Dropdown
                  overlay={menu(
                    i,
                    handleMenuClick,
                    showViewModal,
                    showDeleteModal,
                  )}
                >
                  <DotMenu />
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Modals */}
      <DeleteVendorModal
        email={isEmail}
        showDelete={isDelete}
        handleDelete={() => setIsDelete(false)}
      />
      <ViewVendorModal
        data={isViewData}
        showView={isView}
        handleView={() => setIsView(false)}
      />
    </div>
  );
};

export default Table;
