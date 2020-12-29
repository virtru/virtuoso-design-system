import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveBar } from '@nivo/bar';

import { vds as designTokens } from '@/styles/build/js/design_tokens';
import styles from './BarChart.css';

const BAR_OFFSET = 45;
const LABEL_OFFSET = 25;

const CustomBarComponent = ({ x, y, width, height, label }) => (
  <g transform="translate(0, 48)" className={styles.bar}>
    <rect
      x={x}
      y={y - BAR_OFFSET}
      width={5}
      height={height}
      fill={designTokens.color.blue.lighter.value}
      strokeWidth="0"
      stroke={designTokens.color.blue.lighter.value}
    />
    <rect
      x={x}
      y={y - BAR_OFFSET}
      width={width}
      height={height}
      rx="5"
      ry="5"
      fill={designTokens.color.blue.lighter.value}
      strokeWidth="0"
      stroke={designTokens.color.blue.lighter.value}
    />
    <text dx="-70" y={y - LABEL_OFFSET} className={styles.barLabel}>
      {label}
    </text>
  </g>
);

CustomBarComponent.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

const BarChart = ({ data, yLabel, onClick }) => {
  const dataToShow = data.sort((a, b) => {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    return 0;
  });

  return (
    <div className={styles.barChartContainer}>
      <ResponsiveBar
        data={dataToShow}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        axisLeft={{
          legend: yLabel,
          legendPosition: 'middle',
          legendOffset: -20,
          renderTick: () => <></>, // Do not render ticks
        }}
        axisBottom={{
          tickSize: 0,
        }}
        theme={{
          textColor: designTokens.color.blue.darker.value,
          fontFamily: designTokens.font.family.body.value,
          fontSize: designTokens.font.size.sm.value,
        }}
        layout="horizontal"
        indexBy="key"
        borderRadius="5"
        padding=".2"
        colors={designTokens.color.blue.lighter.value}
        labelTextColor={designTokens.color.blue.darker.value}
        enableGridY={false}
        barComponent={CustomBarComponent}
        enableGridX
        onClick={onClick}
        isInteractive={false}
        label={(d) => `${d.indexValue} - ${d.value}`}
        labelFormat={(d) => <tspan x={90}>{d}</tspan>}
      />
    </div>
  );
};

BarChart.propTypes = {
  data: PropTypes.arrayOf({
    key: PropTypes.string,
    value: PropTypes.number,
  }).isRequired,
  yLabel: PropTypes.string,
  onClick: PropTypes.func,
};

BarChart.defaultProps = {
  yLabel: 'Domains',
  onClick: () => {},
};

export default BarChart;
