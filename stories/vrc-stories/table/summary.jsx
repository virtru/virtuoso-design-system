import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Table, Typography } from 'antd';

const { Text } = Typography;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Borrow',
    dataIndex: 'borrow',
  },
  {
    title: 'Repayment',
    dataIndex: 'repayment',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    borrow: 10,
    repayment: 33,
  },
  {
    key: '2',
    name: 'Jim Green',
    borrow: 100,
    repayment: 0,
  },
  {
    key: '3',
    name: 'Joe Black',
    borrow: 10,
    repayment: 10,
  },
  {
    key: '4',
    name: 'Jim Red',
    borrow: 75,
    repayment: 45,
  },
];

const fixedColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    fixed: true,
    width: 100,
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
];

const fixedData = [];
for (let i = 0; i < 20; i += 1) {
  fixedData.push({
    key: i,
    name: ['Light', 'Bamboo', 'Little'][i % 3],
    description: 'Everything that has a beginning, has an end.',
  });
}

storiesOf('table', module).add('summary', () => 
  <>
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      bordered
      summary={pageData => {
        let totalBorrow = 0;
        let totalRepayment = 0;

        pageData.forEach(({ borrow, repayment }) => {
          totalBorrow += borrow;
          totalRepayment += repayment;
        });

        return (
          <>
            <Table.Summary.Row>
              <Table.Summary.Cell>Total</Table.Summary.Cell>
              <Table.Summary.Cell>
                <Text type="danger">{totalBorrow}</Text>
              </Table.Summary.Cell>
              <Table.Summary.Cell>
                <Text>{totalRepayment}</Text>
              </Table.Summary.Cell>
            </Table.Summary.Row>
            <Table.Summary.Row>
              <Table.Summary.Cell>Balance</Table.Summary.Cell>
              <Table.Summary.Cell colSpan={2}>
                <Text type="danger">{totalBorrow - totalRepayment}</Text>
              </Table.Summary.Cell>
            </Table.Summary.Row>
          </>
        );
      }}
    />

    <br />

    <Table
      columns={fixedColumns}
      dataSource={fixedData}
      pagination={false}
      scroll={{ x: 2000, y: 500 }}
      bordered
      summary={() => (
        <Table.Summary fixed>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0}>Summary</Table.Summary.Cell>
            <Table.Summary.Cell index={1}>This is a summary content</Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
    />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Set summary content by <code>summary</code> prop. Sync column fixed status with <code>Table.Summary.Cell</code>. You can fixed it by set <code>Table.Summary</code> <code>fixed</code> prop(since <code>4.16.0</code>).</p></>) } });