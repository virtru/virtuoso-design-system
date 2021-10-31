import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Text } from '@';

storiesOf('virtru/text', module).add(
  'basic',
  () => (
    <>
      <Text size={Text.SIZE.NORMAL} tag="p">
        Default text (Text.SIZE.NORMAL)
      </Text>
      <Text size={Text.SIZE.SMALL} tag="p">
        Default text (Text.SIZE.SMALL)
      </Text>
      <Text size={Text.SIZE.XSMALL} tag="p">
        Default text (Text.SIZE.XSMALL)
      </Text>
      <Text size={Text.SIZE.XXSMALL} tag="p">
        Default text (Text.SIZE.XXSMALL)
      </Text>

      <Text size={Text.SIZE.NORMAL} tag="p">
        Default text (type = null)
      </Text>
      <Text size={Text.SIZE.NORMAL} tag="p" type="secondary">
        Default text (type = secondary)
      </Text>
      <Text size={Text.SIZE.NORMAL} tag="p" type="success">
        Default text (type = success)
      </Text>
      <Text size={Text.SIZE.NORMAL} tag="p" type="warning">
        Default text (type = warning)
      </Text>
      <Text size={Text.SIZE.NORMAL} tag="p" type="danger">
        Default text (type = danger)
      </Text>
    </>
  ),
  {
    docs: {
      page: () => (
        <>
          <h1 id="enus">en-US</h1>
          <p>Simple Text component examples.</p>
        </>
      ),
    },
  },
);
