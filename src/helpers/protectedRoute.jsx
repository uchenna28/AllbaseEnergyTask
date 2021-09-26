// /* eslint-disable react/prop-types, react/jsx-props-no-spreading */
// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';

// const Index = ({ component: Component, ...rest }) => {
//   const isAnthenticated = localStorage.getItem('token');
//   return (
//     <Route
//       {...rest}
//       render={(props) => (isAnthenticated ? <Component {...props} /> : <Redirect to="/signup" />)}
//     />
//   );
// };

// export default Index;
