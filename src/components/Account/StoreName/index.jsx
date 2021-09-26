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

const StoreName = () => {
  const [email, setEmail] = useState('');
  const [storeName, setStoreName] = useState('');
  // const loading = useSelector((state) => state.auth.loading);
  const antIcon = <LoadingOutlined style={{ fontSize: 24, color: 'white' }} spin />;
  // const [error, setError] = useState("");
  // const [checked, setChecked] = useState(true);
  const auth = useSelector((state) => state.auth);

  // const dispatch = useDispatch();
  const history = useHistory();
  const userLogin = () => {
    // e.preventDefault();
    history.push('/storelocation');

    // const user = {
    //   email,
    //   storeName,
    // };

    // dispatch(login());
  };

  // if (auth.authenticate) {
  //   return <Redirect to="/" />;
  // }
  return (
    <div className="container">
      <div className="row my-2">
        <div className="col-md-6 text-center col-sm-12 order-sm-12 my-auto ">
          <img alt="Kexze-logo" src={kexzeLogo} />
          <p>Vendor Dashboard</p>
        </div>
        <div className="col-md-6 col-sm-12">
          <form onSubmit={userLogin}>
            <div className="row">
              <div className="col-11 mx-auto my-2 border rounded userSignin p-4">
                <div className="col-12 my-4 d-flex justify-content-center">
                  <p className="title">Please Enter Store Details</p>
                </div>
                <div className="col-12 mb-3">
                  <p>Store Name</p>
                  <input
                    type="text"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <p>Store Email</p>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-12 my-4 d-flex justify-content-center ">
                  <button type="submit" className="signinBtn d-flex">
                    Next
                    {/* {loading ? (<Spin indicator={antIcon} />) : 'Login' } */}
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

export default StoreName;
