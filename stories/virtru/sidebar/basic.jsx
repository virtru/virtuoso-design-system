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
    const cardsData = [
      { index: 5, title: 'Accessed (5/7 recipients)' },
      {
        index: 2,
        title: 'Security',
        bodyStyle: {
          borderBottom: '1px solid var(--vds-color-slate-darker)',
          marginBottom: '23px',
        },
        extra: <Button danger>Revoke Access</Button>,
      },
      { index: 4, title: 'Files (78 total)' },
      {
        index: 1,
        title: 'Session Information',
        extra: (
          <CloseOutlined
            style={{ fontSize: '23px', color: 'var(--vds-color-slate-darker)' }}
            onClick={() => {
              setVisibleDrawer(false);
            }}
          />
        ),
        cover: <div>Card body JSX</div>,
        bodyStyle: {
          borderBottom: '1px solid var(--vds-color-slate-darker)',
          marginBottom: '23px',
        },
      },
    ];

    return (
      <>
        <Button type="primary" onClick={() => setVisibleDrawer(!visibleDrawer)}>
          Open Drawer
        </Button>
        <Sidebar
          {...{
            visibleDrawer,
            children: cardsData
              .sort((card1, card2) => card1.index - card2.index)
              .map(({ title, extra, cover, bodyStyle }, i) => (
                <SidebarCard
                  {...{
                    title,
                    extra,
                    cover,
                    bodyStyle,
                    key: i,
                    width: 360,
                    closable: true,
                    style: { marginTop: '54px' },
                  }}
                />
              )),
              style: { marginTop: '1px' },
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
