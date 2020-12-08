import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { geoCentroid } from 'd3-geo';
import { Marker, ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';

import styles from './PolicyMap.css';
import geoData from './geoData.json';

const COLOR_SCALE = ['#f4f5f7', '#dce0e5', '#c6cbd4', '#777e8c'];
const HIGHLIGHT_COLOR = '#b2d6fe';
const BORDER_COLOR = '#515864';
const INITIAL_X = 15;
const INITIAL_Y = -19;
const NUM_LABELS = 10;
const LETTER_WIDTH = 6;

/**
 * Renders the map component
 * @param {Array<Object>} data An array of data in the format [{ id, value }] where ID is a 3 letter country code
 * e.g. [{ id: 'USA', value: 5708 }, { id: 'FRA', value: 376 }]
 * @param {Function} onClick A callback function that is used when a country is clicked. Passes { id, value }
 * e.g. { id: 'USA', value: 5708 }
 * @returns {*}
 * @constructor
 */
const PolicyMap = ({ data, onClick }) => {
  const [tooltip, setTooltip] = useState();

  const topCountries = data
    .sort((a, b) => {
      if (a.value > b.value) return -1;
      if (a.value < b.value) return 1;
      return 0;
    })
    .slice(0, NUM_LABELS)
    .map((d) => d.id);

  const maxVal = data.map((d) => d.value).reduce((acc, curr) => (curr > acc ? curr : acc));

  const getColor = (val) => {
    return COLOR_SCALE[Math.floor(((val - 1) / maxVal) * COLOR_SCALE.length)];
  };

  const mapContent = ({ geographies }) => {
    const countries = [];
    const labels = [];
    geographies.forEach((geo) => {
      const dataPoint = data.find((point) => point.id === geo.properties.ISO_A3);
      if (topCountries.includes(geo.properties.ISO_A3)) {
        const centroid = geoCentroid(geo);
        const markerWidth = geo.properties.NAME.length * LETTER_WIDTH;

        labels.push(
          <Marker
            coordinates={centroid}
            className={styles.marker}
            onClick={() => onClick(dataPoint)}
          >
            <rect
              x={-(markerWidth / 2)}
              y="-9"
              width={markerWidth}
              height="16"
              rx="4"
              fill={HIGHLIGHT_COLOR}
              stroke={BORDER_COLOR}
            />
            <text y="2" fontSize={8} textAnchor="middle">
              {/* {geo.properties.NAME} ({dataPoint.value}) */}
              {geo.properties.NAME}
            </text>
          </Marker>,
        );
      }
      countries.push(
        <Geography
          key={geo.rsmKey}
          geography={geo}
          onClick={() => onClick(dataPoint)}
          fill={dataPoint ? getColor(dataPoint.value) : 'pink'}
          stroke="#FFFFFF"
          onMouseEnter={() => {
            if (dataPoint && dataPoint.value) {
              setTooltip(`${geo.properties.NAME} (${dataPoint.value})`);
            }
          }}
          onMouseLeave={() => {
            setTooltip('');
          }}
          style={{
            hover: {
              fill: dataPoint && dataPoint.value && HIGHLIGHT_COLOR,
              outline: 'none',
            },
            pressed: {
              fill: '#E42',
              outline: 'none',
            },
          }}
        />,
      );
    });
    return (
      <>
        {countries}
        {labels}
      </>
    );
  };

  return (
    <>
      <ReactTooltip
        backgroundColor={HIGHLIGHT_COLOR}
        borderColor={BORDER_COLOR}
        border
        textColor="#000000"
      >
        {tooltip}
      </ReactTooltip>
      <div className={styles.container}>
        <ComposableMap data-tip="">
          <ZoomableGroup zoom={1} center={[INITIAL_X, INITIAL_Y]}>
            <Geographies geography={geoData}>{mapContent}</Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </>
  );
};

PolicyMap.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.number,
    }),
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PolicyMap;
