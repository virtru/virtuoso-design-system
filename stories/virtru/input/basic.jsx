import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { Input } from '@';

storiesOf('virtru/input', module).add(
  'basic',
  () => {
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');

    /**
     * Simple change handler
     * @param {*} value
     */
    function handleChange(e) {
      setValue(e.target.value);
    }

    /**
     * Simple change handler2
     * @param {*} value
     */
    function handleChange2(e) {
      setValue2(e.target.value);
    }

    return (
      <>
        <div>
          <Input
            value={value}
            onChange={handleChange}
            message="This is an info message"
            state="info"
          />
        </div>
        <div style={{ marginTop: '20px' }}>
          <Input
            value={value2}
            onChange={handleChange2}
            message="This is an error message"
            state="error"
          />
        </div>
      </>
    );
  },
  {
    docs: {
      page: () => (
        <>
          <h1 id="enus">en-US</h1>
          <p>Simple Input component examples.</p>
        </>
      ),
    },
  },
);
