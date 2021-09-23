import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Form, Input } from 'antd';

storiesOf('Components/Ant Design/Form', module).add('disabled-input-debug', () => 
  <Form>
    <Form.Item label="Normal0">
      <Input placeholder="unavailable choice" value="Buggy!" />
    </Form.Item>
    <Form.Item label="Fail0" validateStatus="error" help="Buggy!">
      <Input placeholder="unavailable choice" value="Buggy!" />
    </Form.Item>
    <Form.Item label="FailDisabled0" validateStatus="error" help="Buggy!">
      <Input placeholder="unavailable choice" disabled value="Buggy!" />
    </Form.Item>
    <Form.Item label="Normal1">
      <Input placeholder="unavailable choice" value="Buggy!" />
    </Form.Item>
    <Form.Item label="Fail1" validateStatus="error" help="Buggy!">
      <Input placeholder="unavailable choice" value="Buggy!" />
    </Form.Item>
    <Form.Item label="FailDisabled1" validateStatus="error" help="Buggy!">
      <Input placeholder="unavailable choice" disabled value="Buggy!" />
    </Form.Item>
    <Form.Item label="Normal2">
      <Input placeholder="unavailable choice" addonBefore="Buggy!" />
    </Form.Item>
    <Form.Item label="Fail2" validateStatus="error" help="Buggy!">
      <Input placeholder="unavailable choice" addonBefore="Buggy!" />
    </Form.Item>
    <Form.Item label="FailDisabled2" validateStatus="error" help="Buggy!">
      <Input placeholder="unavailable choice" disabled addonBefore="Buggy!" />
    </Form.Item>
    <Form.Item label="Normal3">
      <Input placeholder="unavailable choice" prefix="人民币" value="50" />
    </Form.Item>
    <Form.Item label="Fail3" validateStatus="error" help="Buggy!">
      <Input placeholder="unavailable choice" prefix="人民币" value="50" />
    </Form.Item>
    <Form.Item label="FailDisabled3" validateStatus="error" help="Buggy!">
      <Input placeholder="unavailable choice" disabled prefix="人民币" value="50" />
    </Form.Item>
  </Form>,
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/form/" target="_blank">
                  documentation on Form component
                </a>.
              </>
            ) }
        });