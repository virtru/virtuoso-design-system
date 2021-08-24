import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Tabs, Select } from 'antd';

const { TabPane } = Tabs;
const { Option } = Select;

const positionList = ['left', 'right', 'top', 'bottom'];

const list = new Array(20).fill().map((_, index) => index);

class Demo extends React.Component {
  state = {
    parentPos: undefined,
    childPos: undefined,
    parentType: undefined,
    childType: undefined,
  };

  render() {
    const { parentPos, childPos, parentType, childType } = this.state;

    return (
      <div>
        <Select
          style={{ width: 200 }}
          onChange={val => {
            this.setState({ parentPos: val });
          }}
        >
          {positionList.map(pos => (
            <Option key={pos} value={pos}>
              Parent - {pos}
            </Option>
          ))}
        </Select>

        <Select
          style={{ width: 200 }}
          onChange={val => {
            this.setState({ childPos: val });
          }}
        >
          {positionList.map(pos => (
            <Option key={pos} value={pos}>
              Child - {pos}
            </Option>
          ))}
        </Select>

        <Select
          style={{ width: 200 }}
          onChange={val => {
            this.setState({ parentType: val });
          }}
        >
          <Option value="line">Parent - line</Option>
          <Option value="card">Parent - card</Option>
          <Option value="editable-card">Parent - card edit</Option>
        </Select>

        <Select
          style={{ width: 200 }}
          onChange={val => {
            this.setState({ childType: val });
          }}
        >
          <Option value="line">Child - line</Option>
          <Option value="card">Child - card</Option>
          <Option value="editable-card">Parent - card edit</Option>
        </Select>

        <Tabs defaultActiveKey="1" tabPosition={parentPos} type={parentType}>
          <TabPane tab="Tab 1" key="1">
            <Tabs
              defaultActiveKey="1"
              tabPosition={childPos}
              type={childType}
              style={{ height: 300 }}
            >
              {list.map(key => (
                <TabPane tab={`Tab ${key}`} key={key}>
                  TTTT {key}
                </TabPane>
              ))}
            </Tabs>
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

storiesOf('antd/tabs', module).add('nest', () => <Demo />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Default activate first tab.</p></>) } });