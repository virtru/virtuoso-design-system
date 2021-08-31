// import 'antd/dist/antd.css';
import 'antd/dist/antd.less';
import * as antd from 'antd';
import React from 'react';
import Table from './components/table/table';
import Header from './components/layout/header';

const names = Object.keys(antd).filter((x) => x[0] === x[0].toUpperCase());

const values = names.map((name) => (props) => {
  const AntDComponent = antd[name];
  return <AntDComponent {...props} />;
});

const components = names.reduce((o, k, i) => ({ ...o, [k]: values[i] }), {});

export { default as Table } from './components/table/table';
export { default as Header } from './components/layout/header';

components.Table = Table;
components.Header = Header;

export default components;
