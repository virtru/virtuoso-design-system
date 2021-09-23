import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Table, Badge, Menu, Dropdown, Switch, Form, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item>Action 1</Menu.Item>
    <Menu.Item>Action 2</Menu.Item>
  </Menu>
);

function NestedTable() {
  const createExpandedRowRender = bordered => () => {
    const columns = [
      { title: 'Date', dataIndex: 'date', key: 'date' },
      { title: 'Name', dataIndex: 'name', key: 'name' },
      {
        title: 'Status',
        key: 'state',
        render: () => (
          <span>
            <Badge status="success" />
            Finished
          </span>
        ),
      },
      { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <Space size="middle">
            <a>Pause</a>
            <a>Stop</a>
            <Dropdown overlay={menu}>
              <a>
                More <DownOutlined />
              </a>
            </Dropdown>
          </Space>
        ),
      },
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56',
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} bordered={bordered} />;
  };

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Platform', dataIndex: 'platform', key: 'platform' },
    { title: 'Version', dataIndex: 'version', key: 'version' },
    { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    { title: 'Creator', dataIndex: 'creator', key: 'creator' },
    { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
    { title: 'Action', key: 'operation', render: () => <a>Publish</a> },
  ];

  const data = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i,
      name: 'Screem',
      platform: 'iOS',
      version: '10.3.4.5654',
      upgradeNum: 500,
      creator: 'Jack',
      createdAt: '2014-12-24 23:12:00',
    });
  }

  const [rootTableBordered, setRootTableBordered] = React.useState(true);
  const [childTableBordered, setChildTableBordered] = React.useState(true);
  return (
    <>
      <Form
        layout="inline"
        className="components-table-demo-control-bar"
        style={{ marginBottom: 16 }}
      >
        <Form.Item label="Root Table Bordered">
          <Switch checked={rootTableBordered} onChange={v => setRootTableBordered(v)} />
        </Form.Item>
        <Form.Item label="Child Table Bordered">
          <Switch checked={childTableBordered} onChange={v => setChildTableBordered(v)} />
        </Form.Item>
      </Form>
      <Table
        title={() => 'cool'}
        footer={() => 'cool'}
        className="components-table-demo-nested"
        columns={columns}
        expandable={{ expandedRowRender: createExpandedRowRender(childTableBordered) }}
        dataSource={data}
        bordered={rootTableBordered}
      />
    </>
  );
}

storiesOf('Components/Ant Design/Table', module).add('nest-table-border-debug', () => <NestedTable />, {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/table/" target="_blank">
                  documentation on Table component
                </a>.
              </>
            ) }
        });