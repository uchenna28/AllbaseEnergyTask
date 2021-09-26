import React from 'react';
import PropTypes from 'prop-types';
import allbaseLogo from '../../../assets/allbaseLogo.png';
import {
  SidebarWrapper,
  Logo,
  SidebarTabs,
  Tabs,
  TabText,
} from './styles.module';
import { ReactComponent as Icon1 } from '../../../assets/db_icons/icon1.svg';
import { ReactComponent as Icon2 } from '../../../assets/db_icons/inventoryIcon.svg';
import { ReactComponent as Icon3 } from '../../../assets/db_icons/crmIcon.svg';
import { ReactComponent as Icon4 } from '../../../assets/db_icons/crmIcon.svg';
import { ReactComponent as Icon5 } from '../../../assets/db_icons/icon5.svg';
import { ReactComponent as Icon6 } from '../../../assets/db_icons/device.svg';
import { ReactComponent as Icon7 } from '../../../assets/db_icons/ticket.svg';
import { ReactComponent as Icon1A } from '../../../assets/db_icons/icon1O.svg';
import { ReactComponent as Icon2A } from '../../../assets/db_icons/icon2O.svg';
import { ReactComponent as Icon3A } from '../../../assets/db_icons/icon3O.svg';
// import { ReactComponent as Icon4A } from "../../../assets/db_icons/icon4O.svg";
import { ReactComponent as Icon5A } from '../../../assets/db_icons/icon5O.svg';
import { ReactComponent as Icon6A } from '../../../assets/db_icons/icon6O.svg';
import { ReactComponent as Icon7A } from '../../../assets/db_icons/ticket.svg';

const Sidebar = ({ isDefault }) => {
  const [active, setActive] = React.useState({
    isDashboard: true,
    isOrders: false,
    isProducts: false,
    isReports: false,
    isCustomers: false,
    isVendors: false,
    isSettings: false,
  });

  const handleSetActive = (newActiveState) => {
    setActive((prevState) => ({
      ...prevState,
      isDashboard: newActiveState === 'isDashboard',
      isOrders: newActiveState === 'isOrders',
      isProducts: newActiveState === 'isProducts',
      isReports: newActiveState === 'isReports',
      isCustomers: newActiveState === 'isCustomers',
      isVendors: newActiveState === 'isVendors',
      isSettings: newActiveState === 'isSettings',
    }));
  };

  const getActive = (currentActive) => (currentActive ? 'active' : null);

  return (
    <SidebarWrapper isDefault={isDefault}>
      <Logo>
        <img src={allbaseLogo} alt="Logo" />
      </Logo>

      <SidebarTabs>
        <Tabs className={`${getActive(active.isDashboard)}`} to="/dashboard" onClick={() => handleSetActive('isDashboard')}>
          {active.isDashboard ? <Icon1A /> : <Icon1 />}
          <TabText>
            <span>Dashboard</span>
          </TabText>
        </Tabs>
        <Tabs className={`${getActive(active.isOrders)}`} to="/orders" onClick={() => handleSetActive('isOrders')}>
          {active.isOrders ? <Icon2A /> : <Icon2 />}
          <TabText>
            <span>Inventory</span>
          </TabText>
        </Tabs>
        <Tabs className={`${getActive(active.isProducts)}`} to="/products" onClick={() => handleSetActive('isProducts')}>
          {active.isProducts ? <Icon3A /> : <Icon3 />}
          <TabText>
            <span>Accessories</span>
          </TabText>
        </Tabs>
         <Tabs className={`${getActive(active.isReports)}`} to="/reports" onClick={() => handleSetActive('isReports')}>
          {active.isReports ? <Icon4 /> : <Icon4 />}
          <TabText>
            <span>CRM</span>
          </TabText>
        </Tabs> 
        <Tabs className={`${getActive(active.isCustomers)}`} to="/customers" onClick={() => handleSetActive('isCustomers')}>
          {active.isCustomers ? <Icon5A /> : <Icon5 />}
          <TabText>
            <span>Service Request</span>
          </TabText>
        </Tabs>
        <Tabs className={`${getActive(active.isVendors)}`} to="/vendors" onClick={() => handleSetActive('isVendors')}>
          {active.isVendors ? <Icon6A /> : <Icon6 />}
          <TabText>
            <span>Device</span>
          </TabText>
        </Tabs>
        <Tabs className={`${getActive(active.isSettings)}`} to="/settings" onClick={() => handleSetActive('isSettings')}>
          {active.isSettings ? <Icon7A /> : <Icon7 />}
          <TabText>
            <span>Payment History</span>
          </TabText>
        </Tabs>
      </SidebarTabs>
    </SidebarWrapper>
  );
};

Sidebar.propTypes = {
  isDefault: PropTypes.func.isRequired,
};

export default Sidebar;
