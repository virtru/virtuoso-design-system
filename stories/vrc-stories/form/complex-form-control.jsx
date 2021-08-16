import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Form, Input, Select, Tooltip, Button, Space, Typography } from 'antd';

const { Option } = Select;

const Demo = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form name="complex-form" onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
      <Form.Item label="Username">
        <Space>
          <Form.Item
            name="username"
            noStyle
            rules={[{ required: true, message: 'Username is required' }]}
          >
            <Input style={{ width: 160 }} placeholder="Please input" />
          </Form.Item>
          <Tooltip title="Useful information">
            <Typography.Link href="#API">Need Help?</Typography.Link>
          </Tooltip>
        </Space>
      </Form.Item>
      <Form.Item label="Address">
        <Input.Group compact>
          <Form.Item
            name={['address', 'province']}
            noStyle
            rules={[{ required: true, message: 'Province is required' }]}
          >
            <Select placeholder="Select province">
              <Option value="Zhejiang">Zhejiang</Option>
              <Option value="Jiangsu">Jiangsu</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={['address', 'street']}
            noStyle
            rules={[{ required: true, message: 'Street is required' }]}
          >
            <Input style={{ width: '50%' }} placeholder="Input street" />
          </Form.Item>
        </Input.Group>
      </Form.Item>
      <Form.Item label="BirthDate" style={{ marginBottom: 0 }}>
        <Form.Item
          name="year"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
        >
          <Input placeholder="Input birth year" />
        </Form.Item>
        <Form.Item
          name="month"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
        >
          <Input placeholder="Input birth month" />
        </Form.Item>
      </Form.Item>
      <Form.Item label=" " colon={false}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

storiesOf('form', module).add('complex-form-control', () => <Demo />, { docs: { page: () => (<><pre><code class="diff language-diff">- &lt;Form.Item label="Field" name="field"&gt;
-   &lt;Input /&gt;
- &lt;/Form.Item&gt;
+ &lt;Form.Item label="Field"&gt;
+   &lt;Form.Item name="field" noStyle&gt;&lt;Input /&gt;&lt;/Form.Item&gt; // 直接包裹才会绑定表单
+   &lt;span&gt;description&lt;/span&gt;
+ &lt;/Form.Item&gt;
</code></pre>
<p>这里展示了三种典型场景：</p>
<ul>
<li><code>Username</code>：输入框后面有描述文案或其他组件，在 <code>Form.Item</code> 内使用 <code>&lt;Form.Item name="field" noStyle /&gt;</code> 去绑定对应子控件。</li>
<li><code>Address</code>：有两个控件，在 <code>Form.Item</code> 内使用两个 <code>&lt;Form.Item name="field" noStyle /&gt;</code> 分别绑定对应控件。</li>
<li><code>BirthDate</code>：有两个内联控件，错误信息展示各自控件下，使用两个 <code>&lt;Form.Item name="field" /&gt;</code> 分别绑定对应控件，并修改 <code>style</code> 使其内联布局。</li>
</ul>
<blockquote>
  <p>注意，在 label 对应的 Form.Item 上不要在指定 <code>name</code> 属性，这个 Item 只作为布局作用。</p>
</blockquote>
<p>更复杂的封装复用方式可以参考下面的 <code>自定义表单控件</code> 演示。</p>
<p>#</p></>) } });