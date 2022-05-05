import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { FileListItem, Row, Col, Button } from '@';

import { iconTypeObject } from '@/components/icon/customIconTypeFile';

const icons = Object.keys(iconTypeObject);

storiesOf('virtru/fileListItem', module).add(
  'basic',
  () => (
    <Row gutter={[8, 8]}>
      {icons.map((key) => (
        <Col key={key} xs={24} sm={12} lg={4}>
          <FileListItem
            name={key}
            extension=".tdf"
            decryptedExt={key}
            size="123.45 KB"
            button={
              <Button type="primary" size="small">
                Remove
              </Button>
            }
          />
        </Col>
      ))}
    </Row>
  ),
  {
    docs: {
      page: () => (
        <>
          <h1 id="enus">en-US</h1>
          <p>
            There are <code>primary</code> button, <code>default</code> button, <code>dashed</code>{' '}
            button, <code>text</code> button and <code>link</code> button in antd.
          </p>
        </>
      ),
    },
  },
);
