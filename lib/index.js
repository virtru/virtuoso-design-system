// why? Load the styles loader (includes antd less)
import './styles';

// why? We want to use Ant Design components by default
export * from 'antd';

// why? We want to override some Ant Design experience
export { default as Layout } from './components/layout';
export { default as Table } from './components/table/table';
export { default as Header } from './components/layout/header';
