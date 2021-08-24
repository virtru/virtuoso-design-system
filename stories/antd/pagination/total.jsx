import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Pagination } from 'antd';

storiesOf('pagination', module).add('total', () => 
  <>
    <Pagination
      total={89}
      showTotal={total => <span style={{fontWeight: '300', paddingRight: '15px'}}>{`Total ${total} items`}</span>}
      defaultPageSize={25}
      defaultCurrent={1}
      showSizeChanger={false}
      showLessItems
      size="small"
    />
    <br />
    <Pagination
      total={89}
      showTotal={(total, range) => <span style={{fontWeight: '300', paddingRight: '15px'}}>{`${range[0]} - ${range[1]}\u00A0\u00A0of\u00A0\u00A0${total}`}</span>}
      defaultPageSize={25}
      defaultCurrent={1}
      showSizeChanger={false}
      showLessItems
      size="small"
      // itemRender={(_, type, originalElement) => {
      //   if (type === 'prev') {
      //     return <span style={{}}><LeftOutlined style={{fontSize: '18px'}}/></span>
      //   }
      //   if (type === 'next') {
      //     return <span style={{}}><RightOutlined style={{fontSize: '18px'}}/></span>
      //   }

      //   return originalElement;
      // }}
    />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>You can show the total number of data by setting <code>showTotal</code>.</p></>) } });