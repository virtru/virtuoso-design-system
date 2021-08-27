// import 'antd/dist/antd.css';
import 'antd/dist/antd.less';
import * as antd from 'antd';
import React from 'react';

const names = Object.keys(antd).filter((x) => x[0] === x[0].toUpperCase());
// best so far
const values = names.map(
  (name) => (props) => React.createElement(antd[name], props, props.children),
);
// const values = names.map((name) => (props) => React.cloneElement(antd[name], props));
// const values = names.map((name) => (props) => {
//   const AntDComponent = antd[name];
//   return <AntDComponent {...props} />;
// });

const components = names.reduce((o, k, i) => ({ ...o, [k]: values[i] }), {});
// const components = {};

components.Table = require('./components/table/table').default;
components.Header = require('./components/layout/header').default;
// console.log(names);
// const { Layout } = antd;
// console.log(antd.Button);
// console.log(antd.Layout.Header);

// components.Header = (props) => <Layout.Header {...props} />;
// components.Layout = (props) => React.createElement(Layout.type, props, props.children);
// components.Layout = (props) => <Layout {...props}>{props.children}</Layout>;

// components.Layout = (props) => {
//   React.Children.map(props.children, (child) => {
//     if (React.isValidElement(child)) {
//       return React.cloneElement(child, props);
//     }
//   });
// };

export default components;
