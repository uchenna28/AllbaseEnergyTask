/* eslint-disable react/prop-types */
/* eslint no-extra-parens: "error" */
/* eslint no-extra-parens: ["error", "all", { ignoreJSX: "all" }] */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getAllVendors from '../../../redux/actions/vendors.actions';

/* eslint object-curly-newline: 0 */
export default function VendorPagination() {
  const totalPages = useSelector((state) => state.vendorList.totalPages);
  const dispatch = useDispatch();
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);
  function setPages(num) {
    dispatch(getAllVendors(num - 1));
  }
  return (
    <div>
      {pages.map((num) => (
        <button type="button" onClick={() => setPages(num)} key={num}>
          {num}
        </button>
      ))}
    </div>
  );
}
