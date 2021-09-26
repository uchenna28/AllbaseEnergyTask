/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router-dom';
import kexzeLogo from '../../../assets/logo.svg';
import './createpassword.css';
import { login } from '../../../redux/actions';

/**
 * @author
 * @function Signin
 * */

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loading = useSelector((state) => state.auth.loading);
  const antIcon = <LoadingOutlined style={{ fontSize: 24, color: 'white' }} spin />;
  // const [error, setError] = useState("");
  // const [checked, setChecked] = useState(true);
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const userLogin = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    dispatch(login(user));
  };

  if (auth.authenticate) {
    return <Redirect to="/" />;
  }
  return (
    <div className="container">
      <div className="row my-2">
        <div className="col-md-6 text-center col-sm-12 order-sm-12 my-auto ">
          <img alt="Kexze-logo" src={kexzeLogo} />
          <p>Admin Dashboard</p>
        </div>
        <div className="col-md-6 col-sm-12">
          <form onSubmit={userLogin}>
            <div className="row">
              <div className="col-11 mx-auto my-5 border rounded userSignin p-4">
                <div className="col-12 mt-5 pt-5">
                  <h3>Signin</h3>
                </div>
                <div className="col-12 mb-2">
                  <p>Sign in to your account</p>
                </div>
                <div className="col-12 mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label bold"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="ucheadmin@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <label
                    htmlFor="exampleFormControlInput2"
                    className="form-label"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    id="exampleFormControlInput2"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="col-6 d-flex forgot-password justify-content-end">
                    <a href="/forgotpassword">Forgot Password?</a>
                  </div>
                </div>
                <div className="col-12 mt-2 mb-5 mt-4 pb-5 ">
                  <button type="submit" className="signinBtn d-flex">
                    {loading ? (<Spin indicator={antIcon} />) : 'Login' }
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

export default Signin;
