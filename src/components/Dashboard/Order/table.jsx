/* eslint-disable import/named */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
import { Menu, Dropdown } from 'antd';
import React from 'react';
import axios from '../../../helpers/axios';
import { ReactComponent as DotMenu } from '../../../assets/menu.svg';
import { ReactComponent as View } from '../../../assets/view.svg';
import { ReactComponent as Edit } from '../../../assets/edit.svg';
import { ReactComponent as Remove } from '../../../assets/remove.svg';
import { ViewOrderModal, DeleteOrderModal, UpdateOrderModal } from './modals';

export const titleCase = (str) => {
  str = str.toLowerCase().split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
};

const menu = (
  refNumber,
  handleClick,
  updateFunction,
  viewFunction,
  deleteFunction,
) => (
  <Menu onClick={handleClick}>
    <Menu.Item
      onClick={() => updateFunction(refNumber)}
      icon={<Edit />}
      key="0"
    >
      Edit Order
    </Menu.Item>
    <Menu.Item
      onClick={() => viewFunction(refNumber)}
      icon={<View />}
      key="1"
    >
      View Order
    </Menu.Item>
    <Menu.Item
      onClick={() => deleteFunction(refNumber)}
      icon={<Remove />}
      key="2"
    >
      Delete Order
    </Menu.Item>
  </Menu>
);

/* eslint object-curly-newline: 0 */
const Table = ({ data, handleMenuClick }) => {
  // States
  const [isUpdateId, setIsUpdateId] = React.useState(null);
  const [isDeleteId, setIsDeleteId] = React.useState(null);
  const [selectedOrder, setSelectedOrder] = React.useState(null);
  const [isView, setIsView] = React.useState(false);
  const [isDelete, setIsDelete] = React.useState(false);
  const [isUpdate, setIsUpdate] = React.useState(false);

  // View Order Function
  const getDetailOrder = async (order) => {
    const res = await axios.get(`order/${order}`);
    const orderDetails = res.data.Order;
    console.log(orderDetails);
    setSelectedOrder(orderDetails);
    setIsView(true);
  };
  // Delete Order Function
  const showDeleteModal = (value) => {
    setIsDeleteId(value);
    setIsDelete(true);
  };
  // Update Order Function
  const showUpdateModal = (value) => {
    setIsUpdateId(value);
    setIsUpdate(true);
  };
  const setColor = (status) => {
    if (status === 'delivered') return '#16CB5D';
    if (status === 'pending') return '#F9B300';
    if (status === 'canceled') return '#FC0525';
    if (status === 'enroute') return '#2F80ED';
  };

  return (
    <div className="table_wrapper">
      <table className="table">
        <thead>
          <tr className="pb-4">
            <th scope="col">Order ID</th>
            {/* <th scope="col">Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th> */}
            {/* <th scope="col">
              <DotMenu />
            </th> */}
          </tr>
        </thead>
        <tbody>
          {data.sort((a, b) => a.id - b.id).map((i) => (
            <tr className="">
              <td>{i.id}</td>
              <td>{i.date}</td>
              <td>{i.amount}</td>
              <td style={{ color: setColor(i.status) }}>
                {titleCase(i.status)}
              </td>
              <td>
                <Dropdown
                  overlay={menu(
                    i.reference,
                    handleMenuClick,
                    showUpdateModal,
                    getDetailOrder,
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
      {selectedOrder !== null && (
        <ViewOrderModal
          showView={isView}
          data={selectedOrder}
          handleView={() => setIsView(false)}
        />
      )}
      <DeleteOrderModal
        refNo={isDeleteId}
        showDelete={isDelete}
        handleDelete={() => setIsDelete(false)}
      />
      <UpdateOrderModal
        refNo={isUpdateId}
        showUpdate={isUpdate}
        handleUpdate={() => setIsUpdate(false)}
      />
    </div>
  );
};

export default Table;
