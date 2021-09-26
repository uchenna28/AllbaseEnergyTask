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
              {/* <p>{item.heading}</p>
              <strong>{item.value}</strong> */}
              
              {/* <div className="indicator">
                <div className="arrows">
                   <img src={item.img1} alt="Icon" />
                  <img src={item.img2} alt="Icon" />
                </div>
                <p className="positive">
                  {item.percentage}
                  %
                </p>
                <span>this week</span>
              </div> */}
            </div>
            <div className="card_icon mx-3">
              <strong>{item.value}</strong>
              <p>{item.totalCustomers}</p>
              {/* <div className="indicator">
                <div className="arrows">
                  <img src={item.img1} alt="Icon" />
                  <img src={item.img2} alt="Icon" />
                </div>
                <p className="positive">
                  {item.percentage}
                  %
                </p>
                <span>this week</span>
              </div> */}
            </div>
          </Card>
        ))}
      </CardWrapper>
      <h4>Activities</h4>
      <div className="row mt-5">
        <div className="col-md-7">
          <div className="row">
            <div className="col-md-5 border shadow ">
              <div className="row">
                <div className="col-md-12">
                  <p>ggggggggggggg</p>
                  <p>fhdhhdhhhhh</p>
                </div>
                <div className="row">
                  <div className="col-md-5 border-top">
                    <p>ggggggggg</p>
                    <p>hhshhcbsbb</p>
                  </div>
                  <div className="col-md-3 border-top">
                    <p>ggggggg</p>
                  </div>
                  <div className="col-md-4 border-top">
                    <img src="" />
                  </div>
                  </div>
                  <div className="row">
                  <div className="col-md-5 border-top">
                    <p>ggggggggg</p>
                    <p>hhshhcbsbb</p>
                  </div>
                  <div className="col-md-3 border-top">
                    <p>ggggggg</p>
                  </div>
                  <div className="col-md-4 border-top">
                    <img src="" />
                  </div>
                  </div>
                  <div class="col-md-12 border-top">
              <h6></h6>
              <p></p>
              </div>
              <div class="col-md-12 border-top d-flex justify-content-center" style={{ backgroundColor: "rgba(30, 178, 166, 0.04);"}}>
              <p>ghhhhhhhhhhhh</p>
              </div>
            </div>
            </div>
            <div className="col-md-1"></div>
           <div className="col-md-6 border">
             <div className="row">
             <div className="col-md-12">
                  <p>ggggggggggggg</p>
                  <p>fhdhhdhhhhh</p>
                </div>
                </div>

               
           </div>
        </div>
          </div>
          <div className="col-md-1"></div>
        <div className="col-md-4 border shadow" style={{ borderRadius: " 20px !important"}} >
          {/* <div className="border" > */}
          <div className="row">
            <div class="col-md-12 border-top" style={{ backgroundColor: " #1EB2A6"}}>
              <p>gggggggggggg</p>
              <p>fhhhhhhh</p>
              </div>
              <div class="col-md-12 border-top">
              <h6>gggggggggggg</h6>
              <p>fhhhhhhh</p>
              </div>
              <div class="col-md-12 border-top">
              <h6>gggggggggggg</h6>
              <p>fhhhhhhh</p>
              </div>
              <div class="col-md-12 border-top">
              <h6></h6>
              <p></p>
              </div>
              <div class="col-md-12 border-top d-flex justify-content-center" style={{ backgroundColor: "rgba(30, 178, 166, 0.04);"}}>
              <p>ghhhhhhhhhhhh</p>
              </div>
            </div>
          </div>
          </div>
          <h4 className="my-2" style={{ fontFamily: "HK Grotesk", fontStyle:"normal", fontWeight:"normal", fontSize:"15px", lineHeight:"18px", color: "#526A98"}}>Upcoming appointments</h4>
          {/* </div> */}
      <div className="row border shadow">
        <div className="col-md-10">
          <p className="pending-font" style={{ fontFamily: "HK Grotesk", fontStyle:"normal", fontWeight:"600", fontSize:"18px", lineHeight:"22px", color: "#1EB2A6"}}>Pending Installation request</p>
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
        {/* <div className="col-md-12 border-top"> 
        <div className="row">
            <div className="col-md-2">
              <p>djjddjjj</p>
            </div>
            <div className="col-md-2">
              <p>djjddjjj</p>
            </div>
            <div className="col-md-2">
              <p>djjddjjj</p>
            </div>
            <div className="col-md-2">
              <p>djjddjjj</p>
            </div>
            <div className="col-md-2">
              <p>djjddjjj</p>
            </div>
            <div className="col-md-2">
              <p>djjddjjj</p>
            </div>
        </div>
        </div>
        <div className="col-md-12 border-top"> 
        <div className="row">
            <div className="col-md-2">
              <p>djjddjjj</p>
            </div>
            <div className="col-md-2">
              <p>djjddjjj</p>
            </div>
            <div className="col-md-2">
              <p>djjddjjj</p>
            </div>
            <div className="col-md-2">
              <p>djjddjjj</p>
            </div>
            <div className="col-md-2">
              <p>djjddjjj</p>
            </div>
            <div className="col-md-2">
              <p>djjddjjj</p>
            </div>
        </div>
        </div>
        <div className="col-md-12 border-top"> 
        <div className="row">
            <div className="col-md-2">
              <p>djjddjjj</p>
            </div>
            <div className="col-md-2">
              <p>djjddjjj</p>
            </div>
            <div className="col-md-2">
              <p>djjddjjj</p>
            </div>
            <div className="col-md-2">
              <p>djjddjjj</p>
            </div>
            <div className="col-md-2">
              <p>djjddjjj</p>
            </div>
            <div className="col-md-2">
              <p>djjddjjj</p>
            </div>
        </div>
        </div> */}
      </div>
    </Container>
  );
};

export default Index;
