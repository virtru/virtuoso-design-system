import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

storiesOf('Components/Ant Design/Select', module).add('bordered', () => 
  <>
    <Select defaultValue="lucy" style={{ width: 120 }} bordered={false}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
    <Select defaultValue="lucy" style={{ width: 120 }} disabled bordered={false}>
      <Option value="lucy">Lucy</Option>
    </Select>
  </>,
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/select/" target="_blank">
                  documentation on Select component
                </a>.
              </>
            ) }
        });