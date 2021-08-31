import React from 'react';
import { Layout, Menu, Divider } from 'antd';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const tokens = require('@/styles/build/js/design_tokens');

const vds = {
  color: { white: { value: 'white' } },
  spacer: { sm: { value: '12px' } },
  font: {
    weight: { semibold: { value: 600 } },
    family: { display: { value: 'Raleway' } },
  },
};

const Header = ({ appName, ...props }) => {
  const { children } = props;
  return (
    <Layout.Header {...props}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Logo style={{ fill: vds.color.white.value, padding: '1px 0 0 0', margin: '0 12px 0 0' }} />
        <Divider type="vertical" style={{ background: 'white', height: '25px', margin: 0 }} />
        <Menu inlineIndent={0} theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <span style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>
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
            </span>
            <span>
              <Menu.Item key={1}>{children}</Menu.Item>
            </span>
          </span>
        </Menu>
      </div>
    </Layout.Header>
  );
};

export default Header;
