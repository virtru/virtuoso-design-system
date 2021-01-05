import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveBar } from '@nivo/bar';
import numeral from 'numeral';

import { vds as designTokens } from '@/styles/build/js/design_tokens';
import styles from './BarChart.css';

const BAR_OFFSET = -45;
const LABEL_OFFSET = 5;

const CustomBarComponent = ({ x, y, width, height, label }) => (
  <g transform="translate(0, 48)" className={styles.barContainer}>
    <rect className={styles.barEdges} x={x} y={y + BAR_OFFSET} width={5} height={height} />
    <rect className={styles.bar} x={x} y={y + BAR_OFFSET} width={width} height={height} />
    <text dx="-70" y={y + height / 2 + BAR_OFFSET + LABEL_OFFSET} className={styles.barLabel}>
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

const BarChart = ({ data, yLabel, xLabel, yTicks, xTicks, onClick }) => {
  const dataToShow = data.sort((a, b) => a.value - b.value);
  const axisLeft = {
    legend: yLabel,
    legendPosition: 'middle',
    legendOffset: -20,
  };
  const axisBottom = {
    tickSize: 0,
    orient: 'bottom',
  };

  if (xLabel) {
    axisBottom.legend = xLabel;
    axisBottom.legendPosition = 'middle';
    axisBottom.legendOffset = 30;
  }

  if (!yTicks) {
    axisLeft.renderTick = () => <></>;
  }
  if (!xTicks) {
    axisBottom.renderTick = () => <></>;
    axisBottom.legendOffset = 10;
  }

  const bottomAxisLine = () => (
    <line x1="0" y1="400" x2="700" y2="400" stroke={designTokens.color.slate.lighter.value} />
  );

  return (
    <div className={styles.barChartContainer}>
      <ResponsiveBar
        data={dataToShow}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        axisLeft={axisLeft}
        axisBottom={axisBottom}
        theme={{
          textColor: designTokens.color.blue.darker.value,
          fontFamily: designTokens.font.family.body.value,
          fontSize: designTokens.font.size.sm.value,
          grid: {
            line: {
              stroke: designTokens.color.slate.lighter.value,
            },
          },
        }}
        layout="horizontal"
        indexBy="key"
        borderRadius="5"
        padding=".2"
        layers={['grid', 'axes', 'bars', 'markers', 'legends', bottomAxisLine]}
        colors={designTokens.color.blue.lighter.value}
        labelTextColor={designTokens.color.blue.darker.value}
        enableGridY={false}
        barComponent={CustomBarComponent}
        enableGridX
        onClick={onClick}
        isInteractive={false}
        label={(d) => `${d.indexValue} - ${numeral(d.value).format('0,0')}`}
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
  xLabel: PropTypes.string,
  yTicks: PropTypes.bool,
  xTicks: PropTypes.bool,
  onClick: PropTypes.func,
};

BarChart.defaultProps = {
  yLabel: 'Domains',
  xLabel: '',
  yTicks: false,
  xTicks: false,
  onClick: () => {},
};

export default BarChart;
