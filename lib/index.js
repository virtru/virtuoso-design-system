// import 'antd/dist/antd.css';
import 'antd/dist/antd.less';

export * from 'antd';
export { default as Table } from './components/table/table';

export { default as Navigation } from './components/navigation/navigation';
export { default as NavItem } from './components/navigation/navItem';

export { default as Spinner } from './components/spin/Spinner';
export { default as Loader } from './components/spin/Loader';
// eslint-disable-next-line import/no-cycle
export { default as Header } from './components/layout/header';
export { default as Footer } from './components/layout/footer';
// eslint-disable-next-line import/no-cycle
export { default as VirtruLayout } from './components/layout/virtruLayout';
// eslint-disable-next-line import/no-cycle
export { default as TopMenuDropdown } from './components/dropdown/topMenuDropdown';
// eslint-disable-next-line import/no-cycle
export { default as TopMenuDropdownWrap } from './components/dropdown/topMenuDropdownWrap';

// Icons
export { default as LogoVirtruIcon } from './components/icon/logoVirtruIcon';
export { default as CustomIconAvatar } from './components/icon/customIconAvatar';
export { default as CustomIconArrow } from './components/icon/customIconArrow';
