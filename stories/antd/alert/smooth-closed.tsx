import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { Alert } from 'antd';

const App: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const handleClose = () => {
    setVisible(false);
  };
  return (
    <div>
      {visible ? (
        <Alert message="Alert Message Text" type="success" closable afterClose={handleClose} />
      ) : null}
      <p>placeholder text here</p>
    </div>
  );
};

storiesOf('antd/alert', module).add('smooth-closed', () => <App />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Smoothly unmount Alert upon close.</p></>) } });