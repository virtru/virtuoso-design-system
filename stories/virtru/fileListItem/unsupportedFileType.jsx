import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Row, Col, FileListItem, Button } from '@';

const UnsupportedFileType = (props) => (
  <FileListItem
    name="file-with-error"
    extension=".tdf"
    decryptedExt="pdf"
    size="File type security limitation"
    tabIndex="0"
    button={
      <Button type="primary" size="small">
        Remove
      </Button>
    }
    unsupportedFileType
    {...props}
  />
);

storiesOf('virtru/fileListItem', module).add(
  'unsupportedFileType',
  () => (
    <Row gutter={[8, 8]} justify="center" style={{ width: '100%' }}>
      <Col xs={24} sm={12} lg={4}>
        Watermarking enabled
        <UnsupportedFileType watermarkEnabled />
      </Col>

      <Col xs={24} sm={12} lg={4}>
        PFP enabled
        <UnsupportedFileType persistentProtectionEnabled />
      </Col>

      <Col xs={24} sm={12} lg={4}>
        Watermarking and PFP enabled
        <UnsupportedFileType watermarkEnabled persistentProtectionEnabled />
      </Col>
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
