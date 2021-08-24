import { React } from 'react';
import 'antd/dist/antd.less';
import { Button as AntDButton } from 'antd';

const Button = ({ children }) => <AntDButton type="primary">{children}</AntDButton>;

export default Button;
