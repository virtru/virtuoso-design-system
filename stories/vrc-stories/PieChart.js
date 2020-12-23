/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, color, number } from '@storybook/addon-knobs';
import numeral from 'numeral';

import PieChart from '@/components/PieChart/PieChart';

const size = 500;

// eslint-disable-next-line react/prop-types
const Total = ({ total }) => {
  const textProps = {
    textAnchor: 'middle',
    dominantBaseline: 'ideographic',
    style: {
      font: 'normal 13px "Open-Sans"',
      userSelect: 'none',
      pointerEvents: 'none',
    },
  };

  return (
    <>
      <text {...textProps}>Total: {numeral(total).format('0,0')}</text>
      <text {...textProps} dy="1.8rem">
        policies created
      </text>
    </>
  );
};

storiesOf('PieChart', module).add('Default', () => (
  <div style={{ width: size, height: size }}>
    <PieChart
      data={[
        {
          id: 'sdk',
          label: text('First text', 'SDK'),
          color: color('First color', '#c2b7fa'),
          value: number('First value', 27000),
        },
        {
          id: 'file',
          label: text('Second text', 'Files'),
          color: color('Second color', '#bae5b3'),
          value: number('Second number', 35000),
        },
        {
          id: 'email',
          label: text('Third text', 'Email'),
          color: color('Third color', '#ffbc76'),
          value: number('Third number', 28000),
        },
      ]}
      renderTotal={Total}
    />
  </div>
));
