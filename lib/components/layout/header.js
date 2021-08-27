import React from 'react';
import { Layout, Menu, Space } from 'antd';
import { ReactComponent as Logo } from '../../assets/logo.svg';

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
        <Logo style={{ fill: vds.color.white.value, paddingTop: '1px' }} />
        {/* consider using divider component w vertical prop here */}
        <div
          style={{
            height: '25px',
            margin: `0 0 0 ${vds.spacer.sm.value}`,
            width: '1px',
            background: vds.color.white.value,
          }}
        />
        <Menu inlineIndent={0} theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-between' }}>
            <div>
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
            </div>
            <div>
              <Menu.Item key={1}>{children}</Menu.Item>
            </div>
          </div>
        </Menu>
      </div>
    </Layout.Header>
  );
};

export default Header;
