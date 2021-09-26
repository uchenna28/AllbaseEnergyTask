/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
import { Dropdown, Menu } from 'antd';
import React from 'react';
import axios from '../../../helpers/axios';
// import { useDispatch } from 'react-redux';
// import { USER_PER_PAGE } from '../../../utils/constants';
import { ReactComponent as DotMenu } from '../../../assets/menu.svg';
import { ReactComponent as View } from '../../../assets/view.svg';
import { ReactComponent as Remove } from '../../../assets/remove.svg';
import { DeleteCustomerModal, ViewCustomerModal } from './modal';
import CustomerPagination from './pagination';
// import Pagination from './pagination';

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
      View Order
    </Menu.Item>
    <Menu.Item
      onClick={() => deleteFunction(data.email)}
      icon={<Remove />}
      key="2"
    >
      Delete Order
    </Menu.Item>
  </Menu>
);
const Table = ({
  data,
  handleMenuClick,
  // setPage,
}) => {
  // const dispatch = useDispatch();
  const [isViewData, setIsViewData] = React.useState(null);
  const [isEmail, setIsDeleteId] = React.useState(null);
  const [isView, setIsView] = React.useState(false);
  const [isDelete, setIsDelete] = React.useState(false);
  const showDeleteModal = (value) => {
    setIsDeleteId(value);
    setIsDelete(true);
  };
  // Update Order Function
  const showViewModal = (value) => {
    setIsViewData(value);
    setIsView(true);
  };
  const setPages = async (num) => {
    axios.get('/customer', { params: { num } })
      .then((res) => (res.data));
  };
  return (
    <div className="table_wrapper">
      <table className="table">
        <thead>
          <tr className="pb-4">
            <th scope="col">Customer Name</th>
            <th scope="col">Last Ordered</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((i) => (
            <tr className="">
              <td>{i.name}</td>
              <td>{i.lastOrderDate === null ? '---' : i.lastOrderDate}</td>
              <td>{i.email}</td>
              <td>{i.phone}</td>
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
          <tr>
            <td>
              <CustomerPagination
                // page={page}
                setPages={setPages}
                // hasNextPage={hasNextPage}
              />
            </td>
          </tr>
        </tbody>
      </table>
      {/* Modals */}
      <DeleteCustomerModal
        email={isEmail}
        showDelete={isDelete}
        handleDelete={() => setIsDelete(false)}
      />
      <ViewCustomerModal
        data={isViewData}
        showView={isView}
        handleView={() => setIsView(false)}
      />
    </div>
  );
};

export default Table;
