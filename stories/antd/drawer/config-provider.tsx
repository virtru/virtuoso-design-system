import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React, { useState, useRef } from 'react';
import { Drawer, ConfigProvider, Button } from 'antd';

const App: React.FC = () => {
  const domRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <ConfigProvider getPopupContainer={() => domRef.current!}>
      <div ref={domRef} className="site-drawer-render-in-current-wrapper">
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
        <Drawer
          style={{ position: 'absolute' }}
          title="ConfigProvider"
          placement="right"
          onClose={onClose}
          visible={visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    </ConfigProvider>
  );
};

storiesOf('drawer', module).add('config-provider', () => <App />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>config by ConfigProvider.</p></>) } });