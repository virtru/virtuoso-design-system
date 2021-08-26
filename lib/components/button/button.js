import React from 'react';
import { Button as AntDButton } from 'antd';

// import AntD from 'antd';

// const componentNames = ['Button']
// const components = componentNames.map((name) => (props) => React.createElement(AntD[name], props))

// components.Table = CustomTable

// export default components

const Button = (props) => <AntDButton {...props} />;

export default Button;
