import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { Avatar, Button } from 'antd';

type SizeType = 'large' | 'small' | 'default' | number;
const App: React.FC = () => {
  const [hide, setHide] = useState(true);
  const [size, setSize] = useState<SizeType>('large');
  const [scale, setScale] = useState(1);
  const toggle = () => {
    setHide(!hide);
  };

  const toggleSize = () => {
    const sizes = ['small', 'default', 'large'] as SizeType[];
    let current = sizes.indexOf(size) + 1;
    if (current > 2) {
      current = 0;
    }
    setSize(sizes[current]);
  };

  const changeScale = () => {
    setScale(scale === 1 ? 2 : 1);
  };

  return (
    <>
      <Button onClick={toggle}>Toggle Avatar visibility</Button>
      <Button onClick={toggleSize}>Toggle Avatar size</Button>
      <Button onClick={changeScale}>Change Avatar scale</Button>
      <br />
      <br />
      <div style={{ textAlign: 'center', transform: `scale(${scale})`, marginTop: 24 }}>
        <Avatar size={size} style={{ background: '#7265e6', display: hide ? 'none' : '' }}>
          Avatar
        </Avatar>
        <Avatar
          size={size}
          src="invalid"
          style={{ background: '#00a2ae', display: hide ? 'none' : '' }}
        >
          Invalid
        </Avatar>
        <div style={{ display: hide ? 'none' : '' }}>
          <Avatar size={size} style={{ background: '#7265e6' }}>
            Avatar
          </Avatar>
          <Avatar size={size} src="invalid" style={{ background: '#00a2ae' }}>
            Invalid
          </Avatar>
        </div>
      </div>
    </>
  );
};

storiesOf('avatar', module).add('toggle-debug', () => <App />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Text inside Avatar should be set a proper font size when toggle it's visibility.</p></>) } });