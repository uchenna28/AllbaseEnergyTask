/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import sideImage from '../../../assets/sideIcon.png';
import accountheader from '../../../assets/accountImg.png';
import './createpassword.css';

/**
 * @author
 * @function CreatePasssword
 * */

const ForgotPassword = () => {

  return (
    <div className="cont">
      <div className="row">
        <div className="col-4 side">
          <img alt="Kexze-logo" src={sideImage} />
        </div>
        <div className="col-8 main">
          <div className="loginContainer">
                <div className="row my-3 mx-3">
                  <div className="col-2">
                    <img alt="" src={accountheader} />
                  </div>
                  <div className="col-md-10">
                    <h6 className="large-font">Forgot Password</h6>
                    <p className="small-font">Enter your email to reset password</p>
                  </div>       
                <div className="my-2">
                  <label className="login-font">Email</label>
                  <input type="email"   name="" id=""  placeholder="Enter your email address" required />
                </div>
                <div className="my-3 d-flex justify-content-center">
                  <button type="submit" className="signinBtn d-flex">
                      Login
                  </button>
                </div>
                <div className="others d-flex justify-content-center">
                <p>
                   Don&apos;t have an account?
                <Link to="/">
                <i> Create account?</i>
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
 

export default ForgotPassword;
