import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Tree } from 'antd';

const { DirectoryTree } = Tree;

const treeData = [
  {
    title: 'parent 0',
    key: '0-0',
    children: [
      { title: 'leaf 0-0', key: '0-0-0', isLeaf: true },
      { title: 'leaf 0-1', key: '0-0-1', isLeaf: true },
    ],
  },
  {
    title: 'parent 1',
    key: '0-1',
    children: [
      { title: 'leaf 1-0', key: '0-1-0', isLeaf: true },
      { title: 'leaf 1-1', key: '0-1-1', isLeaf: true },
    ],
  },
];

const Demo: React.FC<{}> = () => {
  const onSelect = (keys: React.Key[], info: any) => {
    console.log('Trigger Select', keys, info);
  };

  const onExpand = () => {
    console.log('Trigger Expand');
  };

  return (
    <DirectoryTree
      multiple
      defaultExpandAll
      onSelect={onSelect}
      onExpand={onExpand}
      treeData={treeData}
    />
  );
};

storiesOf('antd/tree', module).add('directory', () => <Demo />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Built-in directory tree. <code>multiple</code> support <code>ctrl(Windows)</code> / <code>command(Mac)</code> selection.</p></>) } });