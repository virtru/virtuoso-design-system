import React, { useContext } from 'react';
import { usePieArcGenerator as useNivoPieArcGenerator } from '@nivo/pie';

import ChartContext from '../../ChartContext';

import styles from './ArcsLayer.css';

const usePieArcGenerator = (innerRadius, radius) =>
  useNivoPieArcGenerator({
    radius,
    innerRadius,
    cornerRadius: 0,
  });

/* eslint-disable react/prop-types */
const ArcsLayer = ({ radius, innerRadius, dataWithArc, centerX, centerY }) => {
  const { onItemClick, activeItemRadiusIncrease } = useContext(ChartContext);

  const arcGenerator = usePieArcGenerator(innerRadius, radius);
  const activeArcGenerator = usePieArcGenerator(
    radius + activeItemRadiusIncrease,
    innerRadius + activeItemRadiusIncrease,
  );

  return (
    <g transform={`translate(${centerX}, ${centerY})`}>
      {dataWithArc.map((d) => {
        const { isActive } = d.data;
        const currentArcGenerator = isActive ? activeArcGenerator : arcGenerator;
        const arcData = isActive ? { ...d.arc, padAngle: 0.1 } : d.arc;

        return (
          <path
            key={d.id}
            className={styles.slice}
            d={currentArcGenerator(arcData)}
            fill={d.color}
            data-testid={`VDS-chart-slice-${d.value}`}
            onClick={(event) => onItemClick(d.data, event)}
          />
        );
      })}
    </g>
  );
};

export default ArcsLayer;
