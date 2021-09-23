import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { BackTop } from 'antd';

storiesOf('Components/Ant Design/Back Top', module).add('basic', () => 
  <>
    <BackTop />
    Scroll down to see the bottom-right
    <strong className="site-back-top-basic"> gray </strong>
    button.
  </>,
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/back-top/" target="_blank">
                  documentation on Back Top component
                </a>.
              </>
            ) }
        });