/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { CategoryDropdown, SubCatDropdown, SubCateDropdown, Measurement } from './dropdown';
import { Modal, Checkbox } from 'antd';
// import Geocode from 'react-geocode';
// import { Dropdown } from 'primereact/dropdown';
import axios from '../../../helpers/axios';
import Button from '../../ReUsable/button';
import { ReactComponent as Close } from '../../../assets/close.svg';
import { ReactComponent as ImageOutline } from '../../../assets/imageSetup.svg';
import { deleteImg } from '../Constants/images';
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
              Product Name
              :
            </h3>
            <span>{data.name}</span>
          </div>
          <div className="items">
            <h3>
              Product ID
              :
            </h3>
            <span>{data.slug}</span>
          </div>
          <div className="items">
            <h3>
              Product Price
              :
            </h3>
            <span>{data.currentPrice}</span>
          </div>
          <div className="items">
            <h3>
              Product Category
              :
            </h3>
            <span>{data.category}</span>
          </div>
          <div className="items">
            <h3>
              Product Sub_Category
              :
            </h3>
            <span>{data.subCategory}</span>
          </div>
          <div className="items">
            <h3>
              Vendor
              :
            </h3>
            <span>{data.vendor}</span>
          </div>
          <div className="items">
            <h3>
              Date Posted
              :
            </h3>
            <span>{data.createdAt}</span>
          </div>
          <div className="items">
            <h3>
              Product Status
              :
            </h3>
            <span>{data.status}</span>
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

export const AddProductModal = (props) => {
  const { showAdd, handleAdd } = props;
  const [description, setDescription] = useState('');
  const [measuredValue, setMeasuredValue] = useState('');
  const [price, setPrice] = useState('');
  const [productName, setProductName] = useState('');
  const [image, setImage] = useState(null);
  const fileInputRef = useRef();
  const AddProducts = (e) => {
    
    
  };

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
            <form onSubmit={AddProducts}>
            <CategoryDropdown className="dropdowntext" />
              <SubCatDropdown className="dropdowntext" />
              <SubCateDropdown className="dropdowntext" />
              <div className="">
                  {/* <label>Fill Product name</label> */}
                  <input type="text" name="" value={productName} onChange={(e) => setProductName(e.target.value)} id="" placeholder="Product" min="4" max="10" required />
                </div>
              <div className="row">
                {/* <div className="col-4"> */}
              {image == null ? (
                <ImageOutline onClick={(e) => {
                  e.preventDefault();
                  fileInputRef.current.click();
                }}
                />
              ) : <img src={image} alt="" style={{ width: '100px', height: '100px' }} /> }
              <input
                type="file"
                className="fileStyle"
                // style={{ display: 'none' }}
                ref={fileInputRef}
                accept="image/jpeg, image/png"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setImage(URL.createObjectURL(file));
                  // if (file && file.type.substr(0, 5) === 'image') {
                  //   setImage(file);
                  // } else {
                  //   setImage(null);
                  // }
                }}
              />
              {/* </div> */}
              {/* <div className="col-2"></div> */}
              {/* <div className="col-4">
              {image == null ? (
                <ImageOutline onClick={(e) => {
                  e.preventDefault();
                  fileInputRef.current.click();
                }}
                />
              ) : <img src={image} alt="" style={{ width: '100px', height: '100px' }} /> }
              <input
                type="file"
                className="fileStyle"
                // style={{ display: 'none' }}
                ref={fileInputRef}
                accept="image/jpeg, image/png"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setImage(URL.createObjectURL(file));
                  // if (file && file.type.substr(0, 5) === 'image') {
                  //   setImage(file);
                  // } else {
                  //   setImage(null);
                  // }
                }}
              />
              </div> */}
              {/* <div className="col-2"></div> */}
              </div>
              <div className="row">
                <div className="col-3">
                <Measurement className="dropdowntext" />
                </div>
                <div className="col-9">
                  {/* <label>Fill Measurement</label> */}
                <input type="text" name="" value={measuredValue} onChange={(e) => setMeasuredValue(e.target.value)} id="" placeholder="Measurement" min="4" max="10" required />
                </div>
                </div>
                <div className="">
                  <label>Description</label>
                  <input type="text" className="descField" name="" value={description} onChange={(e) => setDescription(e.target.value)} id="" placeholder="Product Description" min="4" max="10" required />
                </div>
                <div className="">
                  <label>Price</label>
                  <input type="number" name="" value={price} onChange={(e) => setPrice(e.target.value)} id="" placeholder="Enter Amount" min="4" max="10" required />
                </div>
              <button type="submit">SAVE</button>
            </form>
          </div>
        </div>
      </Body>
    </Modal>
  );
};
