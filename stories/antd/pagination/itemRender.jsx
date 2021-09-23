import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Pagination } from 'antd';

function itemRender(current, type, originalElement) {
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
}

storiesOf('Components/Ant Design/Pagination', module).add('itemRender', () => <Pagination total={500} itemRender={itemRender} />, {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/pagination/" target="_blank">
                  documentation on Pagination component
                </a>.
              </>
            ) }
        });