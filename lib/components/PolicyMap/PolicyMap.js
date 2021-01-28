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

const toNumeral = (value) => numeral(value).format('0a');
const pairBreakpoints = (result, value, index, array) => {
  if (index % 2 === 0) {
    result.push(array.slice(index, index + 2));
  }

  return result;
};

/**
 * Renders the map component
 * @param {Array<Object>} data An array of data in the format [{ id, value }] where ID is the 2-character ISO country code
 * e.g. [{ id: 'US', value: 5708 }, { id: 'FR', value: 376 }]
 * @param {Function} onClick A callback function that is used when a country is clicked. Passes { id, value }
 * e.g. { id: 'US', value: 5708 }
 * @param {Number} focusQuartile The quartile of data to focus on - accepts 0 to 4 where 0 is show all.
 */
const PolicyMap = ({ data, onClick, focusQuartile, onFocusQuartile, labelText }) => {
  const toggleQuartile = (quartileClicked) => {
    onFocusQuartile(focusQuartile === quartileClicked ? 0 : quartileClicked);
  };
  const [tooltip, setTooltip] = useState();

  let sorted = data.sort((a, b) => a.value - b.value);

  // Breakpoints used for quartile legend
  const breakpoints = [
    1,
    sorted[Math.floor(0.25 * sorted.length)].value,
    sorted[Math.floor(0.25 * sorted.length)].value + 1,
    sorted[Math.floor(0.5 * sorted.length)].value,
    sorted[Math.floor(0.5 * sorted.length)].value + 1,
    sorted[Math.floor(0.75 * sorted.length)].value,
    sorted[Math.floor(0.75 * sorted.length)].value + 1,
    sorted[sorted.length - 1].value,
  ];
  const breakpointPairs = breakpoints.map(toNumeral).reduce(pairBreakpoints, []);

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

    // Otherwise, disable country
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
            <span>
              {labelText}: {tooltip.value}
            </span>
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
          {/* Render quartile ranges using breakpoints calculated above */}
          {breakpointPairs.map((breakpointPair, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index} className={styles.legendListItem}>
              <button
                className={cn(
                  styles.legendListButton,
                  focusQuartile && focusQuartile !== index + 1 && styles.legendListDisabled,
                )}
                onClick={() => toggleQuartile(index + 1)}
                type="button"
              >
                <div className={cn(styles.legendBox, styles[`quartile${index + 1}`])} />
                <span>{breakpointPair.join(' - ')}</span>
              </button>
            </li>
          ))}
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
  labelText: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  focusQuartile: PropTypes.number,
  onFocusQuartile: PropTypes.func,
};

PolicyMap.defaultProps = {
  focusQuartile: 0,
  onFocusQuartile: () => {},
  labelText: 'Policies accessed',
};

export default PolicyMap;
