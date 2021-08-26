import React from 'react';
import { Layout, Menu, Dropdown, Icon } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button } from '../button/button';
// import Logo from '../../assets/logo.svg';
import { ReactComponent as Logo } from '../../assets/logo.svg';
// const Logo = require('../../assets/logo.svg').default;
// import { Logo } from '../Icon/index';

// import * as tokens from '../../styles/build/js/design_tokens';

// const { vds } = tokens;
const vds = {
  color: { white: { value: 'white' } },
  spacer: { sm: { value: '12px' } },
  font: {
    weight: { semibold: { value: 600 } },
    family: { display: { value: 'Raleway' } },
  },
};

// const HeaderLogo = (props) => <Icon component={Logo} {...props} />;

const Header = ({ appName, ...props }) => {
  //   return <Layout.Header {...props} />;
  const menu = null;
  return (
    <Layout.Header {...props}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* <HeaderLogo style={{ fill: vds.color.white.value, paddingTop: '1px' }} /> */}
        <Logo style={{ fill: vds.color.white.value, paddingTop: '1px' }} />

        {/* <Icon component={Logo} className={{ fill: vds.color.white.value, paddingTop: '1px' }} /> */}
        {/* consider using divider component w vertical prop here */}
        <div
          style={{
            height: '25px',
            margin: `0 0 0 ${vds.spacer.sm.value}`,
            width: '1px',
            background: vds.color.white.value,
          }}
        />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key={0}>
            <span
              style={{
                fontWeight: vds.font.weight.semibold.value,
                fontFamily: vds.font.family.display.value,
              }}
            >
              {appName}
            </span>
          </Menu.Item>
          <Menu.Item key={1}>
            {/* <Dropdown overlay={menu} trigger={['click']}>
              <Button
                ghost
                style={{
                  border: '0',
                  color: vds.color.white.value,
                  fontWeight: vds.font.weight.semibold.value,
                }}
              >
                <UserOutlined />
                ksuchak@virtru.com
                <DownOutlined />
              </Button>
            </Dropdown> */}
          </Menu.Item>
        </Menu>
      </div>
    </Layout.Header>
  );
};

export default Header;
