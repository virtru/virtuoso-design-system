import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

const onChange = e => {
  console.log(e);
};

storiesOf('Components/Ant Design/Input', module).add('allowClear', () => 
  <>
    <Input placeholder="input with clear icon" allowClear onChange={onChange} />
    <br />
    <br />
    <TextArea placeholder="textarea with clear icon" allowClear onChange={onChange} />
  </>,
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/input/" target="_blank">
                  documentation on Input component
                </a>.
              </>
            ) }
        });