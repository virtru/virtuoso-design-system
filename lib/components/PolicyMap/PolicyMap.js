import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import numeral from 'numeral';

import { vds } from '../../styles/style_dict/tokens/color/base_colors.json';
import styles from './PolicyMap.css';
import geoData from './geoData.json';

const COLOR_SCALE = [
  vds.color.red.lighter.value,
  vds.color.green.lighter.value,
  vds.color.orange.lighter.value,
  vds.color.purple.lighter.value,
];
const HIGHLIGHT_COLOR = vds.color.blue.lighter.value;
const BORDER_COLOR = vds.color.slate.darker.value;
const WHITE = vds.color.white.value;
const INACTIVE_COLOR = vds.color.slate.evenLighter.value;
const INITIAL_X = 15;
const INITIAL_Y = -19;

/**
 * Renders the map component
 * @param {Array<Object>} data An array of data in the format [{ id, value }] where ID is a 3 letter country code
 * e.g. [{ id: 'USA', value: 5708 }, { id: 'FRA', value: 376 }]
 * @param {Function} onClick A callback function that is used when a country is clicked. Passes { id, value }
 * e.g. { id: 'USA', value: 5708 }
 * @param {Number} focusQuartile The quartile of data to focus on - accepts 0 to 4 where 0 is show all.
 */
const PolicyMap = ({ data, onClick, focusQuartile }) => {
  const [tooltip, setTooltip] = useState();

  let sorted = data.sort((a, b) => {
    if (a.value > b.value) return -1;
    if (a.value < b.value) return 1;
    return 0;
  });

  sorted = sorted.map((dataPoint, i) => {
    const colorIndex = Math.floor((i / sorted.length) * COLOR_SCALE.length);
    if (!focusQuartile) {
      return { ...dataPoint, color: COLOR_SCALE[colorIndex] };
    }
    if (focusQuartile === colorIndex + 1) {
      return { ...dataPoint, color: COLOR_SCALE[colorIndex] };
    }
    return {};
  });

  const mapContent = ({ geographies }) => {
    const countries = [];
    const labels = [];
    geographies.forEach((geo) => {
      const dataPoint = sorted.find((point) => point.id === geo.properties.ISO_A3);
      countries.push(
        <Geography
          key={geo.rsmKey}
          geography={geo}
          onClick={() => onClick(dataPoint)}
          fill={(dataPoint && dataPoint.color) || INACTIVE_COLOR}
          stroke={WHITE}
          strokeWidth="0.6"
          onMouseEnter={() => {
            if (dataPoint && dataPoint.value) {
              setTooltip(`${geo.properties.NAME} (${numeral(dataPoint.value).format('0a')})`);
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
        {tooltip && <span className={styles.tooltip}>{tooltip}</span>}
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
  focusQuartile: PropTypes.number,
};

PolicyMap.defaultProps = {
  focusQuartile: 0,
};

export default PolicyMap;
