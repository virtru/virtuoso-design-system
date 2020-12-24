import React, { Fragment, useContext } from 'react';
import { textPropsByEngine } from '@nivo/core';
import { usePieRadialLabels } from '@nivo/pie';
import * as d3Shape from 'd3-shape';
import numeral from 'numeral';
import cn from 'classnames';

import ChartContext from '../../ChartContext';

import styles from './RadialLabelsLayer.css';

const generateLine = d3Shape
  .line()
  .x((d) => d.x)
  .y((d) => d.y);

// eslint-disable-next-line react/prop-types
const RadialLabelsLayer = ({ centerX, centerY, radius: outerRadius, dataWithArc }) => {
  const {
    onItemClick,
    radialLabelsTextXOffset,
    radialLabelsSkipAngle,
    radialLabelsLinkOffset,
    radialLabelsLinkDiagonalLength,
    radialLabelsLinkHorizontalLength,
  } = useContext(ChartContext);

  const labels = usePieRadialLabels({
    enable: true,
    dataWithArc,
    radius: outerRadius,
    textXOffset: radialLabelsTextXOffset,
    skipAngle: radialLabelsSkipAngle,
    linkOffset: radialLabelsLinkOffset,
    linkDiagonalLength: radialLabelsLinkDiagonalLength,
    linkHorizontalLength: radialLabelsLinkHorizontalLength,
  });

  return (
    <g transform={`translate(${centerX}, ${centerY})`}>
      {labels.map((d) => {
        const textAnchor = textPropsByEngine.svg.align[d.align];
        const className = cn(styles.label, { [styles.active]: d.datum.data.isActive });
        const handleTextClick = (event) => onItemClick(d.datum.data, event);
        const formatNumber = (number) => numeral(number).format('0,0');

        const textProps = {
          className,
          onClick: handleTextClick,
          textAnchor,
          dominantBaseline: 'middle',
        };

        return (
          <Fragment key={d.datum.id}>
            <g transform={`translate(${d.position.x}, ${d.position.y})`}>
              <text {...textProps}>{d.datum.label}</text>
              <text {...textProps} dy="1.4em">
                {formatNumber(d.datum.value)}
              </text>
            </g>
            <path className={styles.line} d={generateLine(d.line)} fill="none" />
          </Fragment>
        );
      })}
    </g>
  );
};

export default RadialLabelsLayer;
