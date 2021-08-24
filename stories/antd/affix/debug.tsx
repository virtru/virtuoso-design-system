import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { Affix, Button } from 'antd';

const Demo: React.FC = () => {
  const [top, setTop] = useState(10);
  return (
    <div style={{ height: 10000 }}>
      <div>Top</div>
      <Affix offsetTop={top}>
        <div style={{ background: 'red' }}>
          <Button type="primary" onClick={() => setTop(top + 10)}>
            Affix top
          </Button>
        </div>
      </Affix>
      <div>Bottom</div>
    </div>
  );
};

storiesOf('affix', module).add('debug', () => <Demo />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>DEBUG</p></>) } });