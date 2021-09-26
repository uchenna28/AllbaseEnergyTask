/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../../helpers/axios';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import sideImage from '../../../assets/sideIcon.png';
import accountheader from '../../../assets/accountImg.png';
import { verifyingEmail } from '../../../redux/actions';
import './signup.css';


/**
 * @author
 * @function SignUp
 * */

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loading = useSelector((state) => state.verifyEmailList.loading);
  // console.log(loading);
  const antIcon = <LoadingOutlined style={{ fontSize: 24, color: 'white' }} spin />;
  // const message = useSelector((state) => state.verifyEmailList.message);
  const verifyEmailList = useSelector((state) => state.verifyEmailList);
  // console.log(authenticate);
  // const log = true;

  const dispatch = useDispatch();
  // const history = useHistory();
  // const setPages = () => {
    // e.preventDefault();
    // history.push('/otppage')
  // }
  // const signupUser = async (e) => {
  //   e.preventDefault();
  //   const user = {
  //         email,
            // password
  //       };
  //   // axios.post('/vendor/verify-email', {... user })
  //   //   .then((res) => (res.data));
  //   //   if (log) {
  //   //     // console.log(authenticate);
  //   //      <Redirect to="/otppage" />;
  //   //       // }
  //   //  }
  //   // dispatch(getAllOrders());
  // };
  const signupUser = (e) => {
    e.preventDefault();

    const user = {
      email,
        password
    };
    dispatch(verifyingEmail(user));
  };
  if (verifyEmailList.authenticate) {
    return <Redirect to="/dashboard" />;
  }
  
  return (
    <div className="cont">
    <div className="row">
      <div className="col-4 side">
        <img alt="Kexze-logo" src={sideImage} />
      </div>
      <div className="col-8 main">
        <div className="signupContainer">
              <div className="row my-3 mx-3">
                <div className="col-2">
                  <img alt="" src={accountheader} />
                </div>
                <div className="col-md-10">
                  <h6 className="large-font">Create an account</h6>
                  <p className="small-font">Enter your email and use a password to begin</p>
                </div>
                <form onSubmit={signupUser}>   
              <div className="my-1 d-flex justify-content-center">
                <input type="text"   name="" id=""  placeholder="Fullname" required />
              </div>
              <div className="my-1 d-flex justify-content-center">
                <input type="email"value={email} onChange={(e) => setEmail(e.target.value)} name="" id=""  placeholder="Email" required />
              </div> 
              <div className="my-1 d-flex justify-content-center">
                <input type="number" name="" id=""  placeholder="Phone" required />
              </div> 
              <div className="my-1 d-flex justify-content-center">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="" id=""  placeholder="Password" required />
              </div> 
              <div className="my-1 d-flex justify-content-center">
                <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} name="" id=""  placeholder="Confirm password" required />
              </div> 
              <div className="my-3 d-flex justify-content-center">
                <button type="submit" className="signinBtn d-flex">
                {loading ? (<Spin indicator={antIcon} />) : 'Create account' }
                </button>
              </div>
              </form>
              <div className="others d-flex justify-content-center">
              <p>
                 Already have an account?
              <Link to="/">
              <i> Login?</i>
              </Link>
              </p>
              </div>
              
      </div>
    </div>
   </div>
  </div>
  </div>
 );
};

export default SignUp;
