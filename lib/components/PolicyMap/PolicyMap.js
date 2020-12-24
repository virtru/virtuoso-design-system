/* eslint-disable no-magic-numbers */

import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import numeral from 'numeral';

import { vds } from '../../styles/style_dict/tokens/color/base_colors.json';
import styles from './PolicyMap.css';
import geoData from './geoData110m.json';

const COLOR_SCALE = [
  vds.color.blue.lightest.value,
  vds.color.blue.lighter.value,
  vds.color.blue.primary.value,
  vds.color.blue.dark.value,
];
const BORDER_COLOR = vds.color.slate.darker.value;
const WHITE = vds.color.white.value;
const INACTIVE_COLOR = vds.color.slate.evenLighter.value;

/**
 * Renders the map component
 * @param {Array<Object>} data An array of data in the format [{ id, value }] where ID is the 2-character ISO country code
 * e.g. [{ id: 'US', value: 5708 }, { id: 'FR', value: 376 }]
 * @param {Function} onClick A callback function that is used when a country is clicked. Passes { id, value }
 * e.g. { id: 'US', value: 5708 }
 * @param {Number} focusQuartile The quartile of data to focus on - accepts 0 to 4 where 0 is show all.
 */
const PolicyMap = ({ data, onClick, focusQuartile, onFocusQuartile }) => {
  const toggleQuartile = (quartileClicked) => {
    onFocusQuartile(focusQuartile === quartileClicked ? 0 : quartileClicked);
  };
  const [tooltip, setTooltip] = useState();

  let sorted = data.sort((a, b) => {
    if (a.value < b.value) return -1;
    if (a.value > b.value) return 1;
    return 0;
  });

  // Breakpoints used for legend
  const breakpoints = [
    numeral(sorted[Math.floor(0.25 * sorted.length)].value).format('0a'),
    numeral(sorted[Math.floor(0.25 * sorted.length)].value + 1).format('0a'),
    numeral(sorted[Math.floor(0.5 * sorted.length)].value).format('0a'),
    numeral(sorted[Math.floor(0.5 * sorted.length)].value + 1).format('0a'),
    numeral(sorted[Math.floor(0.75 * sorted.length)].value).format('0a'),
    numeral(sorted[Math.floor(0.75 * sorted.length)].value + 1).format('0a'),
    numeral(sorted[sorted.length - 1].value).format('0a'),
  ];

  sorted = sorted.map((dataPoint, i) => {
    const colorIndex = Math.floor((i / sorted.length) * COLOR_SCALE.length);

    // Color the country according to quartile if none is selected
    if (!focusQuartile) {
      return { ...dataPoint, color: COLOR_SCALE[colorIndex] };
    }

    // Is a quartile is selected, only color the country if it falls in the quartile range
    if (focusQuartile === colorIndex + 1) {
      return { ...dataPoint, color: COLOR_SCALE[colorIndex] };
    }
    return {};
  });

  const mapContent = ({ geographies }) => {
    const countries = [];
    const labels = [];
    geographies.forEach((geo) => {
      const dataPoint = sorted.find((point) => point.id === geo.properties.ISO_A2);
      countries.push(
        <Geography
          key={geo.rsmKey}
          geography={geo}
          onClick={() => dataPoint && onClick(dataPoint)}
          fill={(dataPoint && dataPoint.color) || INACTIVE_COLOR}
          stroke={WHITE}
          strokeWidth="1.2px"
          vectorEffect="non-scaling-stroke"
          onMouseEnter={() => {
            if (dataPoint && dataPoint.value) {
              setTooltip({
                name: geo.properties.NAME,
                value: numeral(dataPoint.value).format('0a'),
              });
            }
          }}
          onMouseLeave={() => {
            setTooltip('');
          }}
          style={{
            hover: {
              opacity: 0.7,
              // fill: dataPoint && dataPoint.value && HIGHLIGHT_COLOR,
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
    <div className={styles.container}>
      <ReactTooltip backgroundColor={WHITE} borderColor={BORDER_COLOR} border textColor="#000000">
        {tooltip && (
          <p className={styles.tooltip}>
            <strong>{tooltip.name}</strong>
            <br />
            <span>Policies accessed: {tooltip.value}</span>
          </p>
        )}
      </ReactTooltip>
      <ComposableMap
        data-tip=""
        projection="geoMercator"
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 125,
        }}
      >
        <ZoomableGroup zoom={1}>
          <Geographies geography={geoData}>{mapContent}</Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <legend className={styles.legendContainer}>
        <ul className={styles.legendList}>
          <li className={styles.legendListItem}>
            <button
              className={cn(
                styles.legendListButton,
                focusQuartile && focusQuartile !== 1 && styles.legendListDisabled,
              )}
              onClick={() => toggleQuartile(1)}
              type="button"
            >
              <div className={cn(styles.legendBox, styles.quartile1)} />
              <span>1 - {breakpoints[0]}</span>
            </button>
          </li>
          <li className={styles.legendListItem}>
            <button
              className={cn(
                styles.legendListButton,
                focusQuartile && focusQuartile !== 2 && styles.legendListDisabled,
              )}
              onClick={() => toggleQuartile(2)}
              type="button"
            >
              <div className={cn(styles.legendBox, styles.quartile2)} />
              <span>
                {breakpoints[1]} - {breakpoints[2]}
              </span>
            </button>
          </li>
          <li className={styles.legendListItem}>
            <button
              className={cn(
                styles.legendListButton,
                focusQuartile && focusQuartile !== 3 && styles.legendListDisabled,
              )}
              onClick={() => toggleQuartile(3)}
              type="button"
            >
              <div className={cn(styles.legendBox, styles.quartile3)} />
              <span>
                {breakpoints[3]} - {breakpoints[4]}
              </span>
            </button>
          </li>
          <li className={styles.legendListItem}>
            <button
              className={cn(
                styles.legendListButton,
                focusQuartile && focusQuartile !== 4 && styles.legendListDisabled,
              )}
              onClick={() => toggleQuartile(4)}
              type="button"
            >
              <div className={cn(styles.legendBox, styles.quartile4)} />
              <span>
                {breakpoints[5]} - {breakpoints[6]}
              </span>
            </button>
          </li>
        </ul>
      </legend>
    </div>
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
  onFocusQuartile: PropTypes.func,
};

PolicyMap.defaultProps = {
  focusQuartile: 0,
  onFocusQuartile: () => {},
};

export default PolicyMap;
