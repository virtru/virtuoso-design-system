import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { Select } from '@';

const { Option } = Select;

storiesOf('virtru/select', module).add(
  'basic',
  () => {
    const [value, setValue] = useState('lucy');

    /**
     * Simple change handler
     * @param {*} value
     */
    function handleChange(val) {
      setValue(val);
    }

    return (
      <>
        <Select value={value} style={{ width: 120 }} onChange={handleChange}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </>
    );
  },
  {
    docs: {
      page: () => (
        <>
          <h1 id="enus">en-US</h1>
          <p>Simple Select component examples (original antd component).</p>
        </>
      ),
    },
  },
);
