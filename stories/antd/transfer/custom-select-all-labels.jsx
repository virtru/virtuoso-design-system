import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { Transfer } from 'antd';

const mockData = [];
for (let i = 0; i < 10; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
  });
}

const oriTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);

const selectAllLabels = [
  'Select All',
  ({ selectedCount, totalCount }) => `${selectedCount}/${totalCount}`,
];

const App = () => {
  const [targetKeys, setTargetKeys] = useState(oriTargetKeys);
  return (
    <Transfer
      dataSource={mockData}
      targetKeys={targetKeys}
      onChange={setTargetKeys}
      render={item => item.title}
      selectAllLabels={selectAllLabels}
    />
  );
};

storiesOf('antd/transfer', module).add('custom-select-all-labels', () => <App />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Custom the labels for select all checkboxs.</p></>) } });