import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Signin from './Account/Signin';
import SignUp from './Account/SignUp';
import CreatePassword from './Account/CreatePassword';
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

const App = () => (
  <Router>
    <Switch>
      <Route path="/signup" component={SignUp} exact  />
      <Route path="/" component={Signin} exact />
      <Route path="/createpassword" component={CreatePassword} exact />
      
      <Layout>
        <Route path="/dashboard" component={Dashboard} exact />
        <Route path="/orders" component={Orders} exact />
        <Route path="/products" component={Products} exact />
        <Route path="/reports" component={Reports} exact />
        <Route path="/customers" component={Customers} exact />
        <Route path="/vendors" component={Vendors} exact />
        <Route path="/settings" component={Settings} exact />
      </Layout>
    </Switch>
  </Router>
);

export default App;
