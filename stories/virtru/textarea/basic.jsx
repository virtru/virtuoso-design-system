import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { Textarea } from '@';

storiesOf('virtru/textarea', module).add(
  'basic',
  () => {
    const [input1Val, setInput1Val] = useState('');

    return (
      <div style={{ width: '400px' }}>
        <Textarea
          label="Basic textarea"
          message="This is helper text"
          value={input1Val}
          onChange={({ target: { value } }) => {
            setInput1Val(value);
          }}
          rows={4}
        />
      </div>
    );
  },
  {
    docs: {
      page: () => (
        <>
          <h1 id="enus">en-US</h1>
          <p>Simple Textarea component examples.</p>
        </>
      ),
    },
  },
);
