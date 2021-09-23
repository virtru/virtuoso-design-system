import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Affix, Button } from 'antd';

storiesOf('Components/Ant Design/Affix', module).add('on-change', () => 
  <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
    <Button>120px to affix top</Button>
  </Affix>,
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/affix/" target="_blank">
                  documentation on Affix component
                </a>.
              </>
            ) }
        });