// import 'antd/dist/antd.css';
import 'antd/dist/antd.less';
import * as antd from 'antd';
import React from 'react';

const names = Object.keys(antd).filter((x) => x[0] === x[0].toUpperCase());

const values = names.map((name) => (props) => {
  const AntDComponent = antd[name];
  return <AntDComponent {...props} />;
});

const components = names.reduce((o, k, i) => ({ ...o, [k]: values[i] }), {});

components.Table = require('./components/table/table').default;
components.Header = require('./components/layout/header').default;

export default components;
