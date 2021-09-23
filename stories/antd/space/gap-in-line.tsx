import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Space, Switch } from 'antd';

const style: React.CSSProperties = {
  width: 150,
  height: 100,
  background: 'red',
};

const Demo = () => {
  const [singleCol, setSingleCol] = React.useState(false);

  return (
    <>
      <Switch
        checked={singleCol}
        onChange={() => {
          setSingleCol(!singleCol);
        }}
      />
      <div style={{ boxShadow: '0 0 5px green' }}>
        <Space style={{ width: singleCol ? 307 : 310, background: 'blue' }} size={[8, 8]} wrap>
          <div style={style} />
          <div style={style} />
          <div style={style} />
          <div style={style} />
        </Space>
      </div>
    </>
  );
};

storiesOf('Components/Ant Design/Space', module).add('gap-in-line', () => <Demo />, {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/space/" target="_blank">
                  documentation on Space component
                </a>.
              </>
            ) }
        });