import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Slider } from 'antd';

storiesOf('Components/Ant Design/Slider', module).add('dragableTrack', () => <Slider range={{ draggableTrack: true }} defaultValue={[20, 50]} />, {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/slider/" target="_blank">
                  documentation on Slider component
                </a>.
              </>
            ) }
        });