/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import axios from '../../../helpers/axios';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
// import { Redirect } from 'react-router-dom';
import kexzeLogo from '../../../assets/logo.svg';
import { ReactComponent as ImageOutline } from '../../../assets/imageSetup.svg';
import { verifyingEmail } from '../../../redux/actions';
import './createpassword.css';


/**
 * @author
 * @function ImagePage
 * */

const ImagePage = () => {
  // const [email, setEmail] = useState('');
  const history = useHistory();
  const [image, setImage] = useState(null);
  const fileInputRef = useRef();
  // const loading = useSelector((state) => state.verifyEmailList.loading);
  // const antIcon = <LoadingOutlined style={{ fontSize: 24, color: 'white' }} spin />;
  // const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const skipImage = () => {
    history.push('/storename')
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
              <div className="my-5">
                  <p className="d-flex justify-content-center">GET STARTED ON YOUR STORE SETUP </p>
                </div>
                <div className="d-flex justify-content-center my-5 ">
                  <div className="d-flex justify-content-center  h-50 w-50">
                    {image ==null ? (
                      <ImageOutline onClick={(e) =>  {
                        e.preventDefault();
                        fileInputRef.current.click();
                      }}
                      />
                    ) : <img src={image} alt="" style={{ width: '100px', height: '100px' }} />}
                    <input
                      type="file"
                      className="fileStyle"
                      style={{display:"none"}}
                      ref={fileInputRef}
                      accept="image/jpeg, image/png"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        setImage(URL.createObjectURL(file));
                      }}
                    />
                  {/* <img src={imageSetup} className="my-2" /> */}
                  </div>
                </div>
                
                <div className="d-flex justfiy-content-center my-5">
                  <div className="col-md-6 col-sm-12 d-flex justify-content-end">
                  <button  
                    className="uploadBtn"
                    accept="image/jpeg, image/png"
                    onClick={() => {
                      // e.preventDefault();
                      console.log("jdikjd")
                      fileInputRef.current.click();
                      // const file = e.target.files[0];
                      // setImage(URL.createObjectURL(file));
                    }}>
                    Upload
                    {/* {loading ? (<Spin indicator={antIcon} />) : 'Next' } */}
                  </button>
                  </div>
                  <div className="col-md-6 col-sm-12 d-flex col-sm-justify-content-center">
                  <button type="submit" className="skipBtn" onClick={() => skipImage()}>
                    Skip
                    {/* {loading ? (<Spin indicator={antIcon} />) : 'Next' } */}
                  </button>
                  </div>
                  
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePage;
