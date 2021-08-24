import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Switch, Button } from 'antd';

const App = () => {
  const [disabled, setDisabled] = React.useState(true);

  const toggle = () => {
    setDisabled(!disabled);
  };

  return (
    <>
      <Switch disabled={disabled} defaultChecked />
      <br />
      <Button type="primary" onClick={toggle}>
        Toggle disabled
      </Button>
    </>
  );
};

storiesOf('antd/switch', module).add('disabled', () => <App />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Disabled state of <code>Switch</code>.</p></>) } });