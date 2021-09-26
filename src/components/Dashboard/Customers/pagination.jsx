/* eslint-disable react/prop-types */
/* eslint no-extra-parens: "error" */
/* eslint no-extra-parens: ["error", "all", { ignoreJSX: "all" }] */
import React from 'react';
// import { useDispatch } from 'react-redux';
// import { getAllCustomers } from '../../../redux/actions/customers.action';
// import { Pagination } from 'react-bootstrap';

/* eslint object-curly-newline: 0 */
export default function CustomerPagination() {
  // const dispatch = useDispatch();
  // const { setPages } = props;
  const totalPages = 4;
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);
  // function set(num) {
  //   dispatch(getAllCustomers(num));
  // }
  return (
    <div>
      {pages.map((num) => (
        <button type="button" key={num}>
          {num}
        </button>
      ))}
    </div>
  );
}
