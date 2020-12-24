import React from 'react';
import PropTypes from 'prop-types';
import { ResponsivePie } from '@nivo/pie';

import ChartContext from './ChartContext';
import ArcsLayer from './components/ArcsLayer/ArcsLayer';
import CenteredMetricLayer from './components/CenteredMetricLayer/CenteredMetricLayer';
import RadialLabelsLayer from './components/RadialLabelsLayer/RadialLabelsLayer';

const PieChart = ({ data, renderTotal, onItemClick }) => {
  const contextValue = {
    renderTotal,
    onItemClick,
    activeItemRadiusIncrease: 5,
    radialLabelsTextXOffset: 6,
    radialLabelsSkipAngle: 0,
    radialLabelsLinkOffset: -35,
    radialLabelsLinkDiagonalLength: 55,
    radialLabelsLinkHorizontalLength: 25,
  };

  return (
    <ChartContext.Provider value={contextValue}>
      <ResponsivePie
        data={data}
        innerRadius={0.5}
        colors={(slice) => slice.data.color}
        margin={{
          top: 100,
          right: 100,
          bottom: 100,
          left: 100,
        }}
        tooltip={false}
        layers={[CenteredMetricLayer, ArcsLayer, RadialLabelsLayer]}
      />
    </ChartContext.Provider>
  );
};

PieChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      isActive: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  renderTotal: PropTypes.func.isRequired,
  onItemClick: PropTypes.func,
};

PieChart.defaultProps = {
  onItemClick: () => {},
};

export default PieChart;
