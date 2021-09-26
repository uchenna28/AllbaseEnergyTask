import React from 'react';
import { Switch } from 'antd';

export default [
  { title: 'Order confirmation', subtitle: 'You will be notified when custormers order a product.', icon: <Switch checked /> },
  { title: 'Order status change', subtitle: 'You will be notified when custormers  make changes to the order.', icon: <Switch /> },
  { title: 'Order delivered', subtitle: 'You will be notified once an order is delivered.', icon: <Switch checked /> },
  { title: 'Email Notification', subtitle: 'Turn on email notification to get updates via email.', icon: <Switch /> },
  { title: 'Product update notification', subtitle: 'You will be notified when a vendor adds or removes a product', icon: <Switch /> },
  { title: 'Customer notification', subtitle: 'You will be notified when a new customer join or leaves', icon: <Switch /> },
  { title: 'Vendor notification', subtitle: 'You will be notified when a new Vendor join or leaves', icon: <Switch /> },
];
