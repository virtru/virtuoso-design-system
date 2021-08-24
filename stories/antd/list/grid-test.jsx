import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { List, Card } from 'antd';

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];

const ListItem = () => (
  <List.Item>
    <Card title="title">Card content</Card>
  </List.Item>
);

storiesOf('list', module).add('grid-test', () => 
  <>
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={data}
      renderItem={item => (
        <>
          <List.Item>
            <Card title={item.title}>Card content</Card>
          </List.Item>
        </>
      )}
    />
    <List grid={{ gutter: 16, column: 4 }} dataSource={data} renderItem={() => <ListItem />} />
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={data}
      renderItem={() => (
        <>
          <ListItem />
          <div />
        </>
      )}
    />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Test List <code>grid</code> for some edge cases.</p></>) } });