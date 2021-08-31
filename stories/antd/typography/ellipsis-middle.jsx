import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

const EllipsisMiddle = ({ suffixCount, children }) => {
  const start = children.slice(0, children.length - suffixCount).trim();
  const suffix = children.slice(-suffixCount).trim();
  return (
    <Text style={{ maxWidth: '100%' }} ellipsis={{ suffix }}>
      {start}
    </Text>
  );
};

storiesOf('antd/typography', module).add('ellipsis-middle', () => 
  <EllipsisMiddle suffixCount={12}>
    In the process of internal desktop applications development, many different design specs and
    implementations would be involved, which might cause designers and developers difficulties and
    duplication and reduce the efficiency of development.
  </EllipsisMiddle>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>You can ellipsis content from middle by customize <code>ellipsis=&#123;&#123; suffix: ... &#125;&#125;</code>.</p></>) } });