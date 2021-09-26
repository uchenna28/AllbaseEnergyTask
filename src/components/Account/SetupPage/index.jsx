/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import axios from '../../../helpers/axios';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
// import { Redirect } from 'react-router-dom';
import setup from '../../../assets/setup.svg';
import kexzeLogo from '../../../assets/logo.svg';
import camera from '../../../assets/camera.svg'
import { verifyingEmail } from '../../../redux/actions';
import './otp.css';


/**
 * @author
 * @function SetupPage
 * */

const SetupPage = () => {
  const [email, setEmail] = useState('');
  // const loading = useSelector((state) => state.verifyEmailList.loading);
  // const antIcon = <LoadingOutlined style={{ fontSize: 24, color: 'white' }} spin />;
  // const auth = useSelector((state) => state.auth);
  const history = useHistory();
  const dispatch = useDispatch();
  const setStore = (e) => {
    history.push('/imagepage')
    // e.preventDefault();

    // const user = {
    //   email,
    // };
    dispatch(verifyingEmail());
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
        <div className="row">
              <div className="col-11 mx-auto my-1 border h-100 rounded userSignup p-4">
                <div className="d-flex justify-content-center my-3">
                  <img src={setup} />
                </div>
                <div className="my-3">
                  <h5 className="d-flex justify-content-center">GET STARTED ON YOUR STORE SETUP </h5>
                  <p className="descriptionText"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Maxime quis quaerat repudiandae quidem error numquam. 
                     Voluptatem dolorum et recusandae ipsam ea nulla rerum quam. 
                    Cum vel eveniet cupiditate aperiam tempora?</p>
                </div>
                <div className="col-12 mt-2 mb-3 mt-3  d-flex justify-content-center">
                  <button type="submit" className="signinBtn d-flex" onClick={() => setStore()}>
                    Next
                    {/* {loading ? (<Spin indicator={antIcon} />) : 'Next' } */}
                  </button>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupPage;
