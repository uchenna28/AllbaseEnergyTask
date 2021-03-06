/* eslint-disable import/named */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import Container, {
  Card,
  CardWrapper,
} from './styles';
import {
  circle
} from '../Constants/images';
const Index = () => {
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
               <p style={{ fontFamily: "HK Grotesk", fontStyle:"normal", fontWeight:"500", fontSize:"15px", lineHeight:"18px", color: "#333333"}}>{item.Name}</p>
               <p style={{ fontFamily: "HK Grotesk", fontStyle:"normal", fontWeight:"500", fontSize:"15px", lineHeight:"18px", color: "#333333"}}>{item.Email}</p>
              </div>
               <div className="col-md-4 border-top">
                <p style={{ fontFamily: "HK Grotesk", fontStyle:"normal", fontWeight:"500", fontSize:"15px", lineHeight:"18px", color: "#333333"}}>{item.Phone}</p>
               </div>
               <div className="col-md-3 border-top"></div>
             </div>
           ))}
           <div className="col-md-12 d-flex justify-content-center border-top">
             <p>All Customers</p>
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
               <p className="ml-2" style={{ fontFamily: "HK Grotesk", fontStyle:"normal", fontWeight:"500", fontSize:"15px", lineHeight:"18px", color: "#333333"}}>{item.deposit}</p>
               <p style={{ fontFamily: "HK Grotesk", fontStyle:"normal", fontWeight:"500", fontSize:"15px", lineHeight:"18px", color: "#333333"}}>{item.paymentId}</p>
               </div>
               <div className="col-md-4 border-top">
               <p style={{ fontFamily: "HK Grotesk", fontStyle:"normal", fontWeight:"500", fontSize:"15px", lineHeight:"18px", color: "#333333"}}>{item.amount}</p>
               </div>
               
             </div>
             ))}
             <div className="col-md-12 d-flex justify-content-center border-top">
             <p style={{ fontFamily: "HK Grotesk", fontStyle:"normal", fontWeight:"500", fontSize:"15px", lineHeight:"18px", color: "#333333"}}>All Payment</p>
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
             <p style={{ fontFamily: "HK Grotesk", fontStyle:"normal", fontWeight:"500", fontSize:"15px", lineHeight:"18px", color: "#333333"}}>{item.number}</p>
             <p style={{ fontFamily: "HK Grotesk", fontStyle:"normal", fontWeight:"500", fontSize:"15px", lineHeight:"18px", color: "#333333"}}>{item.name}</p>
             </div>
             </div>
             ))}
           </div>
           <div className="col-md-12 d-flex justify-content-center border-top">
             <p>All Details</p>
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
