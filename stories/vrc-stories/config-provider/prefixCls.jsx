import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import { ConfigProvider, Select, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

// Ant Design site use `es` module for view
// but do not replace related lib `lib` with `es`
// which do not show correct in site.
// We may need do convert in site also.
const FormSizeDemo = () => {
  const [prefixCls, setPrefixCls] = useState('light');
  return (
    <div>
      <Button style={{ marginBottom: '12px' }} type="primary" onClick={() => setPrefixCls('dark')}>
        toggle prefixCls
      </Button>
      <div>
        <ConfigProvider prefixCls={prefixCls} iconPrefixCls="bamboo">
          <SmileOutlined />
          <Select />
        </ConfigProvider>
      </div>
    </div>
  );
};
storiesOf('config-provider', module).add('prefixCls', () => <FormSizeDemo />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Config component and icon prefixCls.</p></>) } });