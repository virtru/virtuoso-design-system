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

    const card1 = {
      index: 1,
      title: 'Session Information',
      extra: (
        <CloseOutlined
          style={{ fontSize: '23px', color: 'var(--vds-color-slate-darker)', marginLeft: '10px' }}
          onClick={() => {
            console.log('click')
            setVisibleDrawer(false);
          }}
        />
      ),
      cover: <div>Card body JSX</div>,
      bodyStyle: {
        borderBottom: '1px solid var(--vds-color-slate-darker)',
        marginBottom: '23px',
      },
    };
    const card2 = {
      index: 2,
      title: 'Security',
      bodyStyle: {
        borderBottom: '1px solid var(--vds-color-slate-darker)',
        marginBottom: '23px',
      },
      extra: <Button danger>Revoke Access</Button>,
    };

    return (
      <>
        <Button type="primary" onClick={() => setVisibleDrawer(!visibleDrawer)}>
          Open Drawer
        </Button>
        <Sidebar
          {...{
            visible: visibleDrawer,
            children: (
              <>
                <SidebarCard {...card1} />
                <SidebarCard {...card2} />
              </>
            ),
            style: { marginTop: '1px' },
            contentWrapperStyle: { width: '360px' },
          }}
        ></Sidebar>
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
