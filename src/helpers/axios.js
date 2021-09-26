import axios from 'axios';

// const token = localStorage.getItem('token');

const axiosInstance = axios.create({
  baseURL: 'https://reqres.in/',
  // headers: {
  //   Authorization: token ? `Bearer ${token}` : '',
  // },
});

export default axiosInstance;
