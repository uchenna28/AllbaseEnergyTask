import moment from 'moment';

const notifications = [
  {
    id: `${Math.floor(Math.random() * 1000)}`,
    date: moment().format('dddd, MMMM Do YYYY'),
    title: 'New Product',
    description: 'A gym Equipment',
    time: moment().format('h:mm a'),
  },
  {
    id: `${Math.floor(Math.random() * 1000)}`,
    date: moment().format('dddd, MMMM Do YYYY'),
    title: 'New Vendor Registered',
    description: 'New vendor has registered into kexze vendor platform.',
    time: moment().format('h:mm a'),
  },
  {
    id: `${Math.floor(Math.random() * 1000)}`,
    date: moment().format('dddd, MMMM Do YYYY'),
    title: 'Order request',
    description: ' An order was made by Anthony Slone.',
    time: moment().format('h:mm a'),
  },
  {
    id: `${Math.floor(Math.random() * 1000)}`,
    date: moment().format('dddd, MMMM Do YYYY'),
    title: 'New product added',
    description: 'New product has bean add by KFC nigeria.',
    time: moment().format('h:mm a'),
  },
  {
    id: `${Math.floor(Math.random() * 1000)}`,
    date: moment().format('dddd, MMMM Do YYYY'),
    title: 'New Product',
    description: 'A gym Equipment',
    time: moment().format('h:mm a'),
  },
  {
    id: `${Math.floor(Math.random() * 1000)}`,
    date: moment().format('dddd, MMMM Do YYYY'),
    title: 'New Product',
    description: 'A gym Equipment',
    time: moment().format('h:mm a'),
  },
  {
    id: `${Math.floor(Math.random() * 1000)}`,
    date: moment().format('dddd, MMMM Do YYYY'),
    title: 'New Product',
    description: 'A gym Equipment',
    time: moment().format('h:mm a'),
  },
  {
    id: `${Math.floor(Math.random() * 1000)}`,
    date: moment().format('dddd, MMMM Do YYYY'),
    title: 'New Product',
    description: 'A gym Equipment',
    time: moment().format('h:mm a'),
  },
];

export default notifications;
