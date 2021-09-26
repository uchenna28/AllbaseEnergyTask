// /* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import sideImage from '../../../assets/sideIcon.png';
import accountheader from '../../../assets/accountImg.png';
import './signin.css';
import { login } from '../../../redux/actions';

// /**
//  * @author
//  * @function Signin
//  * */

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
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="cont">
      <div className="row">
        <div className="col-4 side">
          <img alt="Kexze-logo" src={sideImage} />
          {/* <p>Admin Dashboard</p> */}
        </div>
        <div className="col-8 main">
          <div className="loginContainer">
                <div className="row my-3 mx-3">
                  <div className="col-2">
                    <img alt="" src={accountheader} />
                  </div>
                  <div className="col-md-10">
                    <h6 className="large-font">Login to your account</h6>
                    <p className="small-font">Login with your email and password</p>
                  </div>
                  <form onSubmit={userLogin}>   
                <div className="my-2">
                  <label className="login-font">Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  name="" id=""  placeholder="Enter your email address" required />
                </div>
                <div className="my-2">
                  <label  className="login-font">Password</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="" id=""  placeholder="Enter your password" required />
                </div> 
                <div className="my-3 d-flex justify-content-center">
                  <button type="submit" className="signinBtn d-flex">
                  {loading ? (<Spin indicator={antIcon} />) : 'Login' }
                  </button>
                </div>
                </form>
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

export default Signin;
