import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { AutoComplete } from 'antd';

const { Option } = AutoComplete;

const Complete: React.FC = () => {
  const [result, setResult] = useState<string[]>([]);
  const handleSearch = (value: string) => {
    let res: string[] = Array();
    if (!value || value.indexOf('@') >= 0) {
      res = [];
    } else {
      res = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
    }
    setResult(res);
  };
  return (
    <AutoComplete style={{ width: 200 }} onSearch={handleSearch} placeholder="input here">
      {result.map((email: string) => (
        <Option key={email} value={email}>
          {email}
        </Option>
      ))}
    </AutoComplete>
  );
};

storiesOf('antd/auto-complete', module).add('options', () => <Complete />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>You could pass <code>AutoComplete.Option</code> as children of <code>AutoComplete</code>, instead of using <code>options</code>。</p></>) } });