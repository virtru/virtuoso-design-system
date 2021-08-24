import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Typography, Switch } from 'antd';

const { Paragraph, Text } = Typography;

const Demo = () => {
  const [ellipsis, setEllipsis] = React.useState(true);

  return (
    <>
      <Switch
        checked={ellipsis}
        onChange={() => {
          setEllipsis(!ellipsis);
        }}
      />

      <Paragraph ellipsis={ellipsis}>
        Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team.
      </Paragraph>

      <Paragraph ellipsis={ellipsis ? { rows: 2, expandable: true, symbol: 'more' } : false}>
        Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team.
      </Paragraph>

      <Text
        style={ellipsis ? { width: 100 } : undefined}
        ellipsis={ellipsis ? { tooltip: 'I am ellipsis now!' } : false}
      >
        Ant Design, a design language for background applications, is refined by Ant UED Team.
      </Text>
    </>
  );
};

storiesOf('typography', module).add('ellipsis', () => <Demo />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Multiple line ellipsis support. You can use <code>tooltip</code> to config ellipsis tooltip. Recommend <code>expandable</code> when have lots of content.</p></>) } });