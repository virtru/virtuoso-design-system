import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Carousel, Radio } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const PositionCarouselDemo = () => {
  const [dotPosition, setDotPosition] = React.useState('top');

  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };

  return (
    <>
      <Radio.Group onChange={handlePositionChange} value={dotPosition} style={{ marginBottom: 8 }}>
        <Radio.Button value="top">Top</Radio.Button>
        <Radio.Button value="bottom">Bottom</Radio.Button>
        <Radio.Button value="left">Left</Radio.Button>
        <Radio.Button value="right">Right</Radio.Button>
      </Radio.Group>
      <Carousel dotPosition={dotPosition}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </>
  );
};

storiesOf('antd/carousel', module).add('position', () => <PositionCarouselDemo />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>There are 4 position options available.</p></>) } });