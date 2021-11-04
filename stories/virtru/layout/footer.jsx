import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Layout, Footer } from '@';

storiesOf('virtru/layout', module).add(
  'footer',
  () => (
    <Layout className="layout" style={{ width: '100%' }}>
      <Footer />
    </Layout>
  ),
  {
    docs: {
      page: () => (
        <>
          <h1 id="enus">en-US</h1>
          <p>The most basic "header-content-footer" layout.</p>
          <p>
            Generally, the mainnav is placed at the top of the page, and includes the logo, the
            first level navigation, and the secondary menu (users, settings, notifications) from
            left to right in it. We always put contents in a fixed size navigation (eg:{' '}
            <code>1200px</code>), the layout of the whole page is stable, it's not affected by
            viewing area.
          </p>
          <p>
            Top-bottom structure is conform with the top-bottom viewing habit, it's a classical
            navigation pattern of websites. This pattern demonstrates efficiency in the main
            workarea, while using some vertical space. And because the horizontal space of the
            navigation is limited, this pattern is not suitable for cases when the first level
            navigation contains many elements or links.
          </p>
        </>
      ),
    },
  },
);
