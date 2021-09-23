import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Tooltip } from 'antd';

storiesOf('Components/Ant Design/Tooltip', module).add('basic', () => 
  <Tooltip title="prompt text">
    <span>Tooltip will show on mouse enter.</span>
  </Tooltip>,
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/tooltip/" target="_blank">
                  documentation on Tooltip component
                </a>.
              </>
            ) }
        });