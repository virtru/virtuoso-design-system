import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Tree } from 'antd';

const treeData = [];

for (let i = 0; i < 100; i += 1) {
  const children = [];

  for (let j = 0; j < 100; j += 1) {
    children.push({
      title: `child ${i}-${j}`,
      key: `l-${i}-${j}`,
    });
  }

  treeData.push({
    title: `parent ${i}`,
    key: `l-${i}`,
    children,
  });
}

const Demo = () => <Tree defaultExpandAll height={400} treeData={treeData} />;

storiesOf('antd/tree', module).add('big-data', () => <Demo />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Plenty of tree nodes.</p></>) } });