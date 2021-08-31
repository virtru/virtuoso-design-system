import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Popconfirm, Button } from 'antd';

const App = () => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const showPopconfirm = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  return (
    <>
      <Popconfirm
        title="Title"
        visible={visible}
        onConfirm={handleOk}
        okButtonProps={{ loading: confirmLoading }}
        onCancel={handleCancel}
      >
        <Button type="primary" onClick={showPopconfirm}>
          Open Popconfirm with async logic
        </Button>
      </Popconfirm>
    </>
  );
};

storiesOf('antd/popconfirm', module).add('async', () => <App />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Asynchronously close a popconfirm when a the OK button is pressed. For example, you can use this pattern when you submit a form.</p></>) } });