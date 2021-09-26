/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
// import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import kexzeLogo from '../../../assets/logo.svg';
import './createpassword.css';
import { login } from '../../../redux/actions';

/**
 * @author
 * @function Signin
 * */

const StoreLocation = () => {
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  // const loading = useSelector((state) => state.auth.loading);
  const antIcon = <LoadingOutlined style={{ fontSize: 24, color: 'white' }} spin />;
  // const [error, setError] = useState("");
  // const [checked, setChecked] = useState(true);
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const history = useHistory();
  const storeDetails = () => {
    // e.preventDefault();
    history.push('/dashboard');

    // const user = {
    //   email,
    //   password,
    // };

    // dispatch(login());
  };

  // if (auth.authenticate) {
  //   return <Redirect to="/" />;
  // }
  return (
    <div className="container">
      <div className="row my-2">
        <div className="col-md-6 text-center col-sm-12 order-sm-12  my-auto ">
          <img alt="Kexze-logo" src={kexzeLogo} />
          <p>Admin Dashboard</p>
        </div>
        <div className="col-md-6 col-sm-12">
          <form onSubmit={storeDetails}>
            <div className="row">
              <div className="col-11 mx-auto my-2 border rounded userSignin p-4">
                <div className="col-12 mb-1 d-flex justify-content-center">
                  <p className="title">Store Location</p>
                </div>
                <div className="row">
                <div className="col-6">
                  <p>Street address</p>
                  <input
                    type="text"
                    value={streetAddress}
                    onChange={(e) => setStreetAddress(e.target.value)}
                  />
                </div>
                <div className="col-6">
                 <p>City</p>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <p>State</p>
                  <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <p>Zip/Postal Code</p>
                  <input
                    type="number"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <p>Country</p>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <p>Phone Number</p>
                  <input
                    type="number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                </div>
                <div className="col-12 my-3 d-flex justify-content-center">
                  <button type="submit" className="signinBtn d-flex">
                    Setup
                    {/* {loading ? (<Spin indicator={antIcon} />) : 'SetUp' } */}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StoreLocation;
