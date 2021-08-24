import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Select, Divider, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

let index = 0;

class App extends React.Component {
  state = {
    items: ['jack', 'lucy'],
    name: '',
  };

  onNameChange = event => {
    this.setState({
      name: event.target.value,
    });
  };

  addItem = () => {
    console.log('addItem');
    const { items, name } = this.state;
    this.setState({
      items: [...items, name || `New item ${index++}`],
      name: '',
    });
  };

  render() {
    const { items, name } = this.state;
    return (
      <Select
        style={{ width: 240 }}
        placeholder="custom dropdown render"
        dropdownRender={menu => (
          <div>
            {menu}
            <Divider style={{ margin: '4px 0' }} />
            <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
              <Input style={{ flex: 'auto' }} value={name} onChange={this.onNameChange} />
              <a
                style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                onClick={this.addItem}
              >
                <PlusOutlined /> Add item
              </a>
            </div>
          </div>
        )}
      >
        {items.map(item => (
          <Option key={item}>{item}</Option>
        ))}
      </Select>
    );
  }
}

storiesOf('antd/select', module).add('custom-dropdown-menu', () => <App />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Customize the dropdown menu via <code>dropdownRender</code>.</p></>) } });