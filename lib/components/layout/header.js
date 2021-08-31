import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Divider } from 'antd';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import * as tokens from '../../styles/build/js/design_tokens';

const { vds } = tokens;

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

Header.propTypes = {
  appName: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  appName: '',
  children: null,
};

export default Header;
