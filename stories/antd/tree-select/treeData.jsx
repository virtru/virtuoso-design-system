import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { TreeSelect } from 'antd';

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
  },
];

class Demo extends React.Component {
  state = {
    value: undefined,
  };

  onChange = value => {
    console.log(value);
    this.setState({ value });
  };

  render() {
    return (
      <TreeSelect
        style={{ width: '100%' }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={treeData}
        placeholder="Please select"
        treeDefaultExpandAll
        onChange={this.onChange}
      />
    );
  }
}

storiesOf('antd/tree-select', module).add('treeData', () => <Demo />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>The tree structure can be populated using <code>treeData</code> property. This is a quick and easy way to provide the tree content.</p></>) } });