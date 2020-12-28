import React, { useContext } from 'react';

import ChartContext from '../../ChartContext';

/* eslint-disable react/prop-types */
const CenteredMetricLayer = ({ dataWithArc, centerX, centerY }) => {
  const { renderTotal } = useContext(ChartContext);
  const total = dataWithArc.reduce((sum, arc) => sum + arc.value, 0);

  return <g transform={`translate(${centerX}, ${centerY})`}>{renderTotal({ total })}</g>;
};

export default CenteredMetricLayer;
