import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

const onChange = e => {
  console.log('Change:', e.target.value);
};

storiesOf('Components/Ant Design/Input', module).add('textarea-show-count', () => <TextArea showCount maxLength={100} onChange={onChange} />, {
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