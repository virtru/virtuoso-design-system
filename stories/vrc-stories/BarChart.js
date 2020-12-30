/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';

import BarChart from '@/components/BarChart/BarChart';

const data = [
  { key: 'company-two.com', value: 5934 },
  { key: 'company-four.com', value: 4626 },
  { key: 'company-one.com', value: 10514 },
  { key: 'company-five.com', value: 3911 },
  { key: 'company-six.com', value: 3516 },
  { key: 'company-seven.com', value: 3015 },
  { key: 'company-three.com', value: 5117 },
  { key: 'company-eight.com', value: 2532 },
  { key: 'company-nine.com', value: 2111 },
  { key: 'company-ten.com', value: 861 },
];

const onClick = (e) => {
  console.log(e);
};

storiesOf('BarChart', module).add('Default', () => {
  const numBars = number('Number of bars to show', 10, { max: 10, min: 1 });
  const dataToShow = data.slice(0, numBars);
  return (
    <div style={{ width: 900, height: 500 }}>
      <BarChart data={dataToShow} yLabel="Domains" onClick={onClick} />
    </div>
  );
});
