import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Pagination } from 'antd';
import { RightOutlined } from '@ant-design/icons';

storiesOf('pagination', module).add('total', () => 
  <>
    <Pagination
      total={85}
      showTotal={total => `Total ${total} items`}
      defaultPageSize={20}
      defaultCurrent={1}
    />
    <br />
    <Pagination
      total={85}
      showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
      defaultPageSize={20}
      defaultCurrent={1}
      showSizeChanger={false}
      itemRender={(current, type, originalElement) => {
        let chevron = {
          display: 'inline-block',
          borderStyle: 'solid',
          // borderLeftWidth: '0 !important',
          // borderBottomWidth: '0 !important',
          margin: '1px',
          content: '',
          // borderWidth: '2px',
          // borderRadius: '1px',
          height: '9px',
          width: '9px'
        }

        if (type === 'prev') {
          chevron.transform = 'translateX(25%) rotate(225deg)';
          return <span style={chevron}/>;
        }
        if (type === 'next') {
          return <RightOutlined style={{fontSize: '20px'}}/>
        }

        return originalElement;
      }}
    />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>You can show the total number of data by setting <code>showTotal</code>.</p></>) } });