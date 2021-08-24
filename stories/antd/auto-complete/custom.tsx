import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { AutoComplete, Input } from 'antd';

const { TextArea } = Input;

const Complete: React.FC = () => {
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const handleSearch = (value: string) => {
    setOptions(
      !value ? [] : [{ value }, { value: value + value }, { value: value + value + value }],
    );
  };

  const handleKeyPress = (ev: React.KeyboardEvent<HTMLTextAreaElement>) => {
    console.log('handleKeyPress', ev);
  };

  const onSelect = (value: string) => {
    console.log('onSelect', value);
  };

  return (
    <AutoComplete
      options={options}
      style={{ width: 200 }}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <TextArea
        placeholder="input here"
        className="custom"
        style={{ height: 50 }}
        onKeyPress={handleKeyPress}
      />
    </AutoComplete>
  );
};

storiesOf('auto-complete', module).add('custom', () => <Complete />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Customize Input Component</p></>) } });