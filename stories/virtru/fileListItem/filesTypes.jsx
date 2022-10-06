import React from 'react';
import { storiesOf } from '@storybook/react';

import { FileListItem, Row, Col, Button } from '@';

import 'antd/dist/antd.less';

import { iconTypeObject } from '@/components/icon/customIconTypeFile';

const icons = Object.keys(iconTypeObject);

storiesOf('virtru/fileListItem', module).add(
  'files-types',
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
      page: null,
    },
  },
);
