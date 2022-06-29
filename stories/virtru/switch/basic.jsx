import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Switch } from '@';

storiesOf('virtru/switch', module).add(
  'basic',
  () => (
    <>
      <Switch defaultChecked></Switch>
    </>
  ),
  {
    docs: {
      page: () => (
        <>
          <h1 id="enus">en-US</h1>
          <p>
            There are <code>default</code> switch
          </p>
        </>
      ),
    },
  },
);
