import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { Affix, Button } from 'antd';

const Demo: React.FC = () => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  return (
    <div className="scrollable-container" ref={setContainer}>
      <div className="background">
        <Affix target={() => container}>
          <Button type="primary">Fixed at the top of container</Button>
        </Affix>
      </div>
    </div>
  );
};

storiesOf('affix', module).add('target', () => <Demo />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Set a <code>target</code> for 'Affix', which is listen to scroll event of target element (default is <code>window</code>).</p></>) } });