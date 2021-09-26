import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Signin from './Account/Signin';
import SignUp from './Account/SignUp';
import OtpPage from './Account/OtpPage';
import CreatePassword from './Account/CreatePassword';
import SetupPage from './Account/SetupPage';
import ImagePage from './Account/ImagePage';
import StoreType from './Account/StoreType';
import StoreLocation from './Account/StoreLocation';
import StoreName from './Account/StoreName';
import {
  Dashboard,
  Orders,
  Customers,
  Reports,
  Products,
  Settings,
  Vendors,
} from '../pages';
// import ProtectedRoute from '../helpers/protectedRoute';
import Notifications from '../pages/notifications';
import NoteDetails from '../pages/noteDetail';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={SignUp} exact  />
      <Route path="/login" component={Signin} exact />
      <Route path="/otppage" component={OtpPage} exact/>
      <Route path="/createpassword" component={CreatePassword} exact />
      <Route path="/setuppage" component={SetupPage} exact/>
      <Route path="/imagepage" component={ImagePage} exact/>
      <Route path="/storetype" component={StoreType} exact/>
      <Route path="/storename" component={StoreName} exact/>
      <Route path="/storelocation" component={StoreLocation} exact />
      <Layout>
        <Route path="/dashboard" component={Dashboard} exact />
        <Route path="/orders" component={Orders} exact />
        <Route path="/products" component={Products} exact />
        <Route path="/reports" component={Reports} exact />
        <Route path="/customers" component={Customers} exact />
        <Route path="/vendors" component={Vendors} exact />
        <Route path="/settings" component={Settings} exact />
        <Route path="/note-details/:id" component={NoteDetails} exact />
        <Route path="/notifications" component={Notifications} exact />
      </Layout>
    </Switch>
  </Router>
);

export default App;
