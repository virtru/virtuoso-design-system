import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveBar } from '@nivo/bar';
import numeral from 'numeral';

import { vds as designTokens } from '@/styles/build/js/design_tokens';
import styles from './BarChart.css';

import CustomBar from './components/CustomBar/CustomBar';

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
    axisLeft.renderTick = () => null;
  }
  if (!xTicks) {
    axisBottom.renderTick = () => null;
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
        padding={0.2}
        layers={['grid', 'axes', 'bars', 'markers', 'legends', bottomAxisLine]}
        colors={designTokens.color.blue.lighter.value}
        labelTextColor={designTokens.color.blue.darker.value}
        enableGridY={false}
        barComponent={CustomBar}
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
