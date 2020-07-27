import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Text.css';

const SIZE = {
  NORMAL: 'NORMAL',
  SMALL: 'SMALL',
  XSMALL: 'XSMALL',
  XXSMALL: 'XXSMALL',
};

const sizeClasses = {
  [SIZE.NORMAL]: styles.normal,
  [SIZE.SMALL]: styles.small,
  [SIZE.XSMALL]: styles.xsmall,
  [SIZE.XXSMALL]: styles.xxsmall,
};

/**
 * Renders a text component.
 * @param {Object} props
 * @prop {String} tag The HTML tag to render the text in
 * @prop {String} size
 * @prop {String} color
 * @prop {Node} children
 * @return {*}
 */
const Text = ({ tag, size, color, children, ...textProps }) => {
  const Tag = tag;
  const tagClass = tag === 'p' ? styles.paragraph : null;

  return (
    <Tag className={cn(sizeClasses[size], tagClass)} style={{ color }} {...textProps}>
      {children}
    </Tag>
  );
};

Text.propTypes = {
  tag: PropTypes.string,
  size: PropTypes.oneOf(Object.values(SIZE)),
  color: PropTypes.string,
  children: PropTypes.node,
};

Text.defaultProps = {
  tag: 'p',
  size: SIZE.NORMAL,
  color: null,
  children: null,
};

export default Object.assign(Text, { SIZE });
