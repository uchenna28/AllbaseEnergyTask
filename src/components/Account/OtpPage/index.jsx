/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import axios from '../../../helpers/axios';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
// import { Redirect } from 'react-router-dom';
import kexzeLogo from '../../../assets/logo.svg';
import { verifyingEmail } from '../../../redux/actions';
import './otp.css';


/**
 * @author
 * @function OtpPage
 * */

const OtpPage = () => {
  const [otp, setOtp] = useState('');
  // const loading = useSelector((state) => state.verifyEmailList.loading);
  // const antIcon = <LoadingOutlined style={{ fontSize: 24, color: 'white' }} spin />;
  // const auth = useSelector((state) => state.auth);
  const history = useHistory();
  const verifyOtp = () => {
    // e.preventDefault();
    history.push("/createpassword")
  }
  // const dispatch = useDispatch();
  // const verifyOtp = (e) => {
  //   e.preventDefault();

  //   const user = {
  //     otp,
  //   };
  //   dispatch(verifyingEmail(user));
  // };

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
          <form onSubmit={verifyOtp}>
            <div className="row">
              <div className="col-11 mx-auto my-1 border h-100 rounded userSignup p-4">
                <div className="col-12 mt-1 pt-1 d-flex justify-content-center mt-5">
                  <p className="welcome-font">Verify Email</p>
                </div>
                <div className="row g-3 ">
                <div className="col-md-12 my-5">
                  <p className="my-3">Enter Otp sent to your Email </p>
                  {/* <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label bold title"
                  >
                    Enter Your Email To Get <span className="font-weight-bolder">started</span>
                  </label> */}
                  <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Pin"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />
                </div>
                </div>
                <div className="col-12 mt-2 mb-3 mt-3  d-flex justify-content-center">
                  <button type="submit" className="signinBtn d-flex">
                    Next
                    {/* {loading ? (<Spin indicator={antIcon} />) : 'Next' } */}
                  </button>
                </div>
                {/* <p className="d-flex justify-content">Resend in 90 seconds</p> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
