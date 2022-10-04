import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { Sidebar, SidebarCard } from '@';
import { CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';

storiesOf('virtru/sidebar', module).add(
  'sidebar',
  () => {
    const [visibleDrawer, setVisibleDrawer] = useState(false);
    return (
      <>
        <Button type="primary" onClick={() => setVisibleDrawer(!visibleDrawer)}>
          Open Drawer
        </Button>
        <Sidebar
          visible={visibleDrawer}
          style={{marginTop: '1px'}}
          contentWrapperStyle={{ width: '360px' }}
        >
          <SidebarCard 
            title="Session Information"
            extra={(
              <CloseOutlined
                style={{ fontSize: '23px', color: 'var(--vds-color-slate-darker)', marginLeft: '10px' }}
                onClick={() => {
                  setVisibleDrawer(false);
                }}
              />
            )}
            children={<div>Card body JSX</div>}
          />
          <SidebarCard 
            title="Security"
            extra={<Button danger>Revoke Access</Button>}
          />
        </Sidebar>
      </>
    );
  },
  {
    docs: {
      page: () => (
        <>
          <h1 id="enus">en-US</h1>
          <p>
            There are <code>default</code> sidebar
          </p>
        </>
      ),
    },
  },
);
