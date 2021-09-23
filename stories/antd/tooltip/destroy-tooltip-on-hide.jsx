import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Tooltip } from 'antd';

storiesOf('Components/Ant Design/Tooltip', module).add('destroy-tooltip-on-hide', () => 
  <Tooltip destroyTooltipOnHide={{ keepParent: false }} title="prompt text">
    <span>Tooltip will destroy when hidden.</span>
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