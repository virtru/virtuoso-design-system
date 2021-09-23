import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Mentions, Form, Button } from 'antd';

const { Option, getMentions } = Mentions;

const App = () => {
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      console.log('Submit:', values);
    } catch (errInfo) {
      console.log('Error:', errInfo);
    }
  };

  const checkMention = async (_: any, value: string) => {
    const mentions = getMentions(value);

    if (mentions.length < 2) {
      throw new Error('More than one must be selected!');
    }
  };

  return (
    <Form form={form} layout="horizontal" onFinish={onFinish}>
      <Form.Item
        name="coders"
        label="Top coders"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        rules={[{ validator: checkMention }]}
      >
        <Mentions rows={1}>
          <Option value="afc163">afc163</Option>
          <Option value="zombieJ">zombieJ</Option>
          <Option value="yesmeck">yesmeck</Option>
        </Mentions>
      </Form.Item>
      <Form.Item
        name="bio"
        label="Bio"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        rules={[{ required: true }]}
      >
        <Mentions rows={3} placeholder="You can use @ to ref user here">
          <Option value="afc163">afc163</Option>
          <Option value="zombieJ">zombieJ</Option>
          <Option value="yesmeck">yesmeck</Option>
        </Mentions>
      </Form.Item>
      <Form.Item wrapperCol={{ span: 14, offset: 6 }}>
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};

storiesOf('Components/Ant Design/Mentions', module).add('form', () => <App />, {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/mentions/" target="_blank">
                  documentation on Mentions component
                </a>.
              </>
            ) }
        });