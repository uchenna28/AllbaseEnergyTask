/* eslint-disable import/named */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Spin } from 'antd';
import Table from '../Order/table';
import Container, {
  Card,
  CardWrapper,
  Notifications,
  TableWrapper,
  ViewAll,
} from './styles';
import {
  alertIcon,
  group,
  red,
  blue,
  yellow,
  redArrowDown,
  redArrowUp,
  greenArrowDown,
  greenArrowUp,
  flowArrow,
  naira,
  circle
} from '../Constants/images';
import Searchbar from '../../ReUsable/searchbar';
// import Chart from './chart';
import DatePicker from '../../ReUsable/datePicker';
import { getAllOrders } from '../../../redux/actions';

const Index = () => {
  const orderList = useSelector((state) => state.orderList);
  const notificationList = useSelector(
    (state) => state.notificationList.notifications,
  );
  // const auth = useSelector((state) => state.auth);
  // const TodayOrder = useSelector((state) => state.auth.TodayOrder);
  // const TotalRevenue = useSelector((state) => state.auth.TotalRevenue);
  const { orders } = orderList;
  // console.log(orders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch, orders]);

  const PersonalDetails = [
    {
      Name: "Joe Doe", Email: 'joedoe@yahoo.com', Phone: '09134567896', 
    },
    {
      Name: "Joe Doe", Email: 'joedoe@yahoo.com', Phone: '0803567893',
    },
    {
      Name: "Joe Doe", Email: 'joedoe@yahoo.com', Phone: '0913456789',
    },
  ]
  const InstalledDetails = [
    {
      name: "Joe Doe",  number: 'AC 67.82.65.78.D2', 
    },
    {
      name: "Joe Doe",  number: 'AC 67.82.65.78.D2', 
    },
    {
      name: "Joe Doe",  number: 'AC 67.82.65.78.D2', 
    },
    
  ]
  const PaymentDetails = [
    {
      deposit: "Auto deposit -Fri, 26th Mar 2021 11:58:03 GM1", paymentId: '16455888999', amount: '100,000.00', 
    },
    {
      deposit: "Auto deposit -Fri, 26th Mar 2021 11:58:03 GM1", paymentId: '16455888999', amount: '100,000.00', 
    },
    {
      deposit: "Auto deposit -Fri, 26th Mar 2021 11:58:03 GM1", paymentId: '16455888999', amount: '100,000.00', 
    },
    
  ]
  const customerDetails = [
    {
      customerName: "Joe Doe", requestType: 'installation', requestDate: '2021-05-20 12:25pm', contactPerson:"Joe Doe-0812346789", status: "Waiting to confirm", action: "Details",
    },
    {
      customerName: "Joe Doe", requestType: 'installation', requestDate: '2021-05-20 12:25pm', contactPerson:"Joe Doe-0812346789", status: "Waiting to confirm", action: "Details",
    },
    {
      customerName: "Joe Doe", requestType: 'installation', requestDate: '2021-05-20 12:25pm', contactPerson:"Joe Doe-0812346789", status: "Waiting to confirm", action: "Details",
    },
    {
      customerName: "Joe Doe", requestType: 'installation', requestDate: '2021-05-20 12:25pm', contactPerson:"Joe Doe-0812346789", status: "Waiting to confirm", action: "Details",
    },
  ]
  const cardDetails = [
    {
       img1: circle,  value: '10', totalCustomers: 'Total Customers'
    },
    {
       img1: circle,  value: '10', totalCustomers: 'Total Customers'
    },
    {
       img1: circle,  value: '10', totalCustomers: 'Total Customers' 
    },
    {
       img1: circle, value: '10', totalCustomers: 'Total Customers' 
    },
    {
       img1: circle, value: '10', totalCustomers: 'Total Customers'
    },
  ];
  return (
    <Container>
      <h3>Dashboard</h3>
      <CardWrapper>
        {cardDetails.map((item) => (
          <Card>
            <div>
            <img src={item.img1} alt="Icon" />
            </div>
            <div className="card_icon mx-3">
              <strong>{item.value}</strong>
              <p>{item.totalCustomers}</p>
            </div>
          </Card>
        ))}
      </CardWrapper>
      <h4>Activities</h4>
      <div className="row">
        <div className="col-md-4">
          <div className="border shadow">
          <div className=""  style={{ backgroundColor: "#1EB2A6"}}>
           <p style={{ fontFamily: "HK Grotesk", fontStyle:"normal", fontWeight:"600", fontSize:"18px", lineHeight:"22px", color: "#ffff"}}>Recent Customers</p>
           <p  style={{ fontFamily: "HK Grotesk", fontStyle:"normal", fontWeight:"500", fontSize:"12px", lineHeight:"14px", color: "white"}}>Most Recent Lists of Customers</p>
           </div>
           {PersonalDetails.map((item, i) => (
           <div className="row" key={i}>
             <div className="col-md-5 border-top">
               <h6>{item.Name}</h6>
               <p>{item.Email}</p>
              </div>
               <div className="col-md-4 border-top">
                <p>{item.Phone}</p>
               </div>
               <div className="col-md-3 border-top"></div>
             </div>
           ))}
           <div className="col-md-12 d-flex justify-content-center border-top">
             <p>hdjjkkk</p>
             </div>
             </div>
        </div>
        <div className="col-md-5">
        <div className="border shadow">
          <div className=""  style={{ backgroundColor: " #1EB2A6"}}>
           <p style={{ fontFamily: "HK Grotesk", fontStyle:"normal", fontWeight:"600", fontSize:"18px", lineHeight:"22px", color: "#ffff"}}>Successful payment</p>
           <p style={{ fontFamily: "HK Grotesk", fontStyle:"normal", fontWeight:"500", fontSize:"12px", lineHeight:"14px", color: "white"}}>Most Recent Lists of Successful Payments </p>
           </div>
           {PaymentDetails.map((item, i) => (
           <div className="row" key={i}>
             <div className="col-md-8 border-top">
               <p className="ml-2">{item.deposit}</p>
               <p>{item.paymentId}</p>
               </div>
               <div className="col-md-4 border-top">
               <p>{item.amount}</p>
               </div>
               
             </div>
             ))}
             <div className="col-md-12 d-flex justify-content-center border-top">
             <p>hdjjkkk</p>
             </div>
             </div>
        </div>
        <div className="col-md-3">
        <div className="border shadow" >
          <div className=""  style={{ backgroundColor: " #1EB2A6"}}>
           <p style={{ fontFamily: "HK Grotesk", fontStyle:"normal", fontWeight:"600", fontSize:"18px", lineHeight:"22px", color: "#ffff"}}>Installed System</p>
           <p style={{ fontFamily: "HK Grotesk", fontStyle:"normal", fontWeight:"500", fontSize:"12px", lineHeight:"14px", color: "white"}}>Most Installed System </p>
           </div>
           {InstalledDetails.map((item, i) => (
           <div className="row" key={i}>
           <div className="col-md-12 border-top">
             <p>{item.number}</p>
             <p>{item.name}</p>
             </div>
             </div>
             ))}
           </div>
        </div>
        </div>
        <h6 className="my-2">Upcoming appointments</h6>
      <div className="row border shadow">
        <div className="col-md-10">
          <p className="" style={{ fontFamily: "HK Grotesk", fontStyle:"normal", fontWeight:"600", fontSize:"18px", lineHeight:"22px", color: "#1EB2A6"}}>Pending Installation request</p>
        </div>
        <div className="col-md-2 d-flex justify-content-end">
          <p   style={{ fontFamily: "HK Grotesk", fontStyle:"normal", fontWeight:"500", fontSize:"14px", lineHeight:"17px", color: "#1EB2A6"}}>view all</p>
        </div>
        <div className="col-md-12 border-top" style={{ backgroundColor: " #1EB2A6"}}>
          <div className="row">
            <div className="col-md-2 mt-2">
              <p  style={{ fontFamily: "HK Grotesk", fontStyle:"normal", fontWeight:"normal", fontSize:"15px", lineHeight:"18px", color: "#ffff"}}>Customer Name</p>
            </div>
            <div className="col-md-2 mt-2">
              <p style={{ fontFamily: "HK Grotesk", fontStyle:"normal", fontWeight:"normal", fontSize:"15px", lineHeight:"18px", color: "#ffff"}}>Request Type</p>
            </div>
            <div className="col-md-2 mt-2">
              <p style={{ fontFamily: "HK Grotesk", fontStyle:"normal", fontWeight:"normal", fontSize:"15px", lineHeight:"18px", color: "#ffff"}}>Request Date</p>
            </div>
            <div className="col-md-2 mt-2">
              <p style={{ fontFamily: "HK Grotesk", fontStyle:"normal", fontWeight:"normal", fontSize:"15px", lineHeight:"18px", color: "#ffff"}}>Contact Person</p>
            </div>
            <div className="col-md-2 mt-2">
              <p style={{ fontFamily: "HK Grotesk", fontStyle:"normal", fontWeight:"normal", fontSize:"15px", lineHeight:"18px", color: "#ffff"}}>Status</p>
            </div>
            <div className="col-md-2 mt-2">
              <p style={{ fontFamily: "HK Grotesk", fontStyle:"normal", fontWeight:"normal", fontSize:"15px", lineHeight:"18px", color: "#ffff"}}>Action</p>
            </div>
        </div>
        </div>
        {customerDetails.map((item, i) => (
        <div className="col-md-12 border-top" key={i}> 
        <div className="row">
            <div className="col-md-2">
              <p style={{ fontFamily: "HK Grotesk", fontStyle:"normal", fontWeight:"500", fontSize:"15px", lineHeight:"18px", color: "#333333"}}>{item.customerName}</p>
            </div>
            <div className="col-md-2">
              <p style={{ fontFamily: "HK Grotesk", fontStyle:"normal", fontWeight:"500", fontSize:"15px", lineHeight:"18px", color: "#333333"}}>{item.requestType}</p>
            </div>
            <div className="col-md-2">
              <p style={{ fontFamily: "HK Grotesk", fontStyle:"normal", fontWeight:"500", fontSize:"15px", lineHeight:"18px", color: "#333333"}}>{item.requestDate}</p>
            </div>
            <div className="col-md-2">
              <p style={{ fontFamily: "HK Grotesk", fontStyle:"normal", fontWeight:"500", fontSize:"15px", lineHeight:"18px", color: "#333333"}}>{item.contactPerson}</p>
            </div>
            <div className="col-md-2">
              <p style={{ fontFamily: "HK Grotesk", fontStyle:"normal", fontWeight:"500", fontSize:"15px", lineHeight:"18px", color: "#333333"}}>{item.status}</p>
            </div>
            <div className="col-md-2">
              <p style={{ fontFamily: "HK Grotesk", fontStyle:"normal", fontWeight:"500", fontSize:"15px", lineHeight:"18px", color: "#333333"}}>{item.action}</p>
            </div>
        </div>
        </div>
        ))}
        
      </div>
    </Container>
  );
};

export default Index;
