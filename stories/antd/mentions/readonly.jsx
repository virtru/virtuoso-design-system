import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Mentions } from 'antd';

const { Option } = Mentions;

function getOptions() {
  return ['afc163', 'zombiej', 'yesmeck'].map(value => (
    <Option key={value} value={value}>
      {value}
    </Option>
  ));
}

function App() {
  return (
    <>
      <div style={{ marginBottom: 10 }}>
        <Mentions style={{ width: '100%' }} placeholder="this is disabled Mentions" disabled>
          {getOptions()}
        </Mentions>
      </div>
      <Mentions style={{ width: '100%' }} placeholder="this is readOnly Mentions" readOnly>
        {getOptions()}
      </Mentions>
    </>
  );
}

storiesOf('mentions', module).add('readonly', () => <App />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Configurate <code>disabled</code> and <code>readOnly</code>.</p></>) } });