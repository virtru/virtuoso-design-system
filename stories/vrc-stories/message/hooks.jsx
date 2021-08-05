import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { message, Button } from 'antd';

const Context = React.createContext({ name: 'Default' });

function Demo() {
  const [messsageApi, contextHolder] = message.useMessage();
  const info = () => {
    messsageApi.open({
      type: 'info',
      content: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
      duration: 1,
    });
  };

  return (
    <Context.Provider value={{ name: 'Ant Design' }}>
      {contextHolder}
      <Button type="primary" onClick={info}>
        Display normal message
      </Button>
    </Context.Provider>
  );
}

storiesOf('message', module).add('hooks', () => <Demo />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Use <code>message.useMessage</code> to get <code>contextHolder</code> with context accessible issue.</p></>) } });