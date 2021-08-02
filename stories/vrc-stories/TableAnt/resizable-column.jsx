import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Table } from 'antd';
import { Resizable } from 'react-resizable';

const ResizableTitle = props => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      handle={
        <span
          className="react-resizable-handle"
          onClick={e => {
            e.stopPropagation();
          }}
        />
      }
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};

class Demo extends React.Component {
  state = {
    columns: [
      {
        title: 'Date',
        dataIndex: 'date',
        width: 200,
      },
      {
        title: 'Amount',
        dataIndex: 'amount',
        width: 100,
        sorter: (a, b) => a.amount - b.amount,
      },
      {
        title: 'Type',
        dataIndex: 'type',
        width: 100,
      },
      {
        title: 'Note',
        dataIndex: 'note',
        width: 100,
      },
      {
        title: 'Action',
        key: 'action',
        render: () => <a>Delete</a>,
      },
    ],
  };

  components = {
    header: {
      cell: ResizableTitle,
    },
  };

  data = [
    {
      key: 0,
      date: '2018-02-11',
      amount: 120,
      type: 'income',
      note: 'transfer',
    },
    {
      key: 1,
      date: '2018-03-11',
      amount: 243,
      type: 'income',
      note: 'transfer',
    },
    {
      key: 2,
      date: '2018-04-11',
      amount: 98,
      type: 'income',
      note: 'transfer',
    },
  ];

  handleResize = index => (e, { size }) => {
    this.setState(({ columns }) => {
      const nextColumns = [...columns];
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width,
      };
      return { columns: nextColumns };
    });
  };

  render() {
    const columns = this.state.columns.map((col, index) => ({
      ...col,
      onHeaderCell: column => ({
        width: column.width,
        onResize: this.handleResize(index),
      }),
    }));

    return <Table bordered components={this.components} columns={columns} dataSource={this.data} />;
  }
}

storiesOf('TableAnt', module).add('resizable-column', () => <Demo />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Implement resizable column by integrate with <a href="https://github.com/STRML/react-resizable">react-resizable</a>. When sort needed, you can use <a href="https://codesandbox.io/s/zrj8xvyzxx">additional mark</a> to prevent resize trigger sort.</p></>) } });