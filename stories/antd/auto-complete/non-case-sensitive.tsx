import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { AutoComplete } from 'antd';

const options = [
  { value: 'Burns Bay Road' },
  { value: 'Downing Street' },
  { value: 'Wall Street' },
];

const Complete: React.FC = () => (
  <AutoComplete
    style={{ width: 200 }}
    options={options}
    placeholder="try to type `b`"
    filterOption={(inputValue, option) =>
      option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
);

storiesOf('Components/Ant Design/Auto Complete', module).add('non-case-sensitive', () => <Complete />, {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/auto-complete/" target="_blank">
                  documentation on Auto Complete component
                </a>.
              </>
            ) }
        });