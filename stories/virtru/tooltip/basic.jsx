import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Tooltip, Button } from '@';

storiesOf('virtru/tooltip', module).add(
  'basic',
  () => {
    const text = 'Prompt text';
    const buttonWidth = 92;

    return (
      <div style={{ overflow: 'auto', width: '500px' }}>
        <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
          <Tooltip placement="topLeft" title={text}>
            <Button style={{ width: buttonWidth }}>TL</Button>
          </Tooltip>
          <Tooltip placement="top" title={text}>
            <Button style={{ width: buttonWidth }}>Top</Button>
          </Tooltip>
          <Tooltip placement="topRight" title={text}>
            <Button style={{ width: buttonWidth }}>TR</Button>
          </Tooltip>
        </div>
        <div style={{ width: buttonWidth, float: 'left' }}>
          <Tooltip placement="leftTop" title={text}>
            <Button style={{ width: buttonWidth }}>LT</Button>
          </Tooltip>
          <Tooltip placement="left" title={text}>
            <Button style={{ width: buttonWidth }}>Left</Button>
          </Tooltip>
          <Tooltip placement="leftBottom" title={text}>
            <Button style={{ width: buttonWidth }}>LB</Button>
          </Tooltip>
        </div>
        <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 }}>
          <Tooltip placement="rightTop" title={text}>
            <Button style={{ width: buttonWidth }}>RT</Button>
          </Tooltip>
          <Tooltip placement="right" title={text}>
            <Button style={{ width: buttonWidth }}>Right</Button>
          </Tooltip>
          <Tooltip placement="rightBottom" title={text}>
            <Button style={{ width: buttonWidth }}>RB</Button>
          </Tooltip>
        </div>
        <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
          <Tooltip placement="bottomLeft" title={text}>
            <Button style={{ width: buttonWidth }}>BL</Button>
          </Tooltip>
          <Tooltip placement="bottom" title={text}>
            <Button style={{ width: buttonWidth }}>Bottom</Button>
          </Tooltip>
          <Tooltip placement="bottomRight" title={text}>
            <Button style={{ width: buttonWidth }}>BR</Button>
          </Tooltip>
        </div>
      </div>
    );
  },
  {
    docs: {
      page: () => (
        <>
          <h1 id="enus">en-US</h1>
          <p>Simple Tooltip component examples.</p>
        </>
      ),
    },
  },
);
