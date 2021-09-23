import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { Drawer, Row, Col, Button } from 'antd';
import { CloseOutlined, MenuOutlined, PlusCircleTwoTone } from '@ant-design/icons';
import './app-drawer.css';

const apps = [
  {
    icon: <PlusCircleTwoTone />,
    title: 'Gmail – Secure Send',
    description: 'Encrypt messages and apply access controls directly within Gmail',
    url: 'https://www.virtru.com/gmail-encryption/',
  },
  {
    icon: <PlusCircleTwoTone />,
    title: 'Drive – Secure Upload & Share',
    description: 'Encrypt messages and apply access controls directly within Gmail',
    url: 'https://www.virtru.com/gmail-encryption/',
  },
  {
    icon: <PlusCircleTwoTone />,
    title: 'Control Center',
    description: 'Manage access to your data at any time with actionable data insight',
    url: 'https://secure.virtru.com/dashboard',
  },
  {
    icon: <PlusCircleTwoTone />,
    title: 'iOS – Secure Send',
    description: 'Send and access secure messages from your Android devices',
    url: 'https://apps.apple.com/us/app/virtru-email-protection/id789957178#?platform=iphone',
  },
  {
    icon: <PlusCircleTwoTone />,
    title: 'Secure Message Gateway',
    description: 'Automatically secure messages flowing through enterprise and custom apps',
    url: 'https://www.virtru.com/data-encryption-enterprise-applications/',
  },
  {
    icon: <PlusCircleTwoTone />,
    title: 'Android – Secure Send',
    description: 'Send and access secure messages from your iOS devices',
    url: 'https://play.google.com/store/apps/details?id=com.virtru.email&hl=en_US',
  },
];

// Define context
const AppDrawerContext = createContext([
  false,
  () => {}, // eslint-disable-line
]);

/**
 * App Drawer Handle
 *
 * Handle to toggle App Drawer
 *
 * @returns ReactNode
 */
function Handle() {
  const setVisible = useContext(AppDrawerContext)[1];
  return (
    <div className="vds-app-drawer">
      <MenuOutlined onClick={() => setVisible(true)} />
    </div>
  );
}

/**
 * App
 *
 * @param {ReactNode} param0.icon icon to use
 * @param {string} param0.title title of the app
 * @param {string} param0.description description of the app
 * @param {url} param0.url url to open when clicked
 * @returns ReactNode
 */
function App({ icon, title, description, url }) {
  return (
    <>
      <Row className="vds-app-drawer-app" align="bottom">
        <Col span={4} className="vds-app-drawer-app-icon">
          {icon}
        </Col>
        <Col span={18} className="vds-app-drawer-app-detail">
          <div className="vds-app-drawer-app-detail-title">{title}</div>
          <div className="vds-app-drawer-app-detail-description">{description}</div>
        </Col>
        <Col span={2} className="vds-app-drawer-app-action">
          <Button type="ghost" size="small" href={url} target="_blank">
            Go
          </Button>
        </Col>
      </Row>
    </>
  );
}
App.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

/**
 * App Drawer
 *
 * Display the various apps which Virtru offers in a drawer
 *
 * @returns {ReactNode}
 */
export default function AppDrawer() {
  const GUTTER_X = 64;
  const GUTTER_Y = 20;
  const [visible, setVisible] = useContext(AppDrawerContext);
  const onClose = () => setVisible(false);
  return (
    <Drawer placement="top" closable={false} onClose={onClose} visible={visible} height="425">
      <div className="vds-app-drawer-header">
        <Button icon={<CloseOutlined />} onClick={onClose} type="text" size="large" />
        <div className="vds-app-drawer-header-title">Protect more data with Virtru</div>
      </div>
      <div className="vds-app-drawer-body">
        <Row gutter={[GUTTER_X, GUTTER_Y]}>
          {apps.map((app) => (
            <Col span={12} key={app.title}>
              <App icon={app.icon} title={app.title} description={app.description} url={app.url} />
            </Col>
          ))}
        </Row>
      </div>
    </Drawer>
  );
}

AppDrawer.Context = AppDrawerContext;
AppDrawer.Handle = Handle;
