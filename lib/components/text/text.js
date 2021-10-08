import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import styles from './text.css';

const AntdText = Typography.Text;

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
 * @prop {String} type (Defines color of text - options: null, 'secondary', 'success', 'warning', 'danger')
 * @prop {Node} children
 * @return {*}
 */
const Text = ({ tag, size, type, children, ...props }) => {
  const Tag = tag;
  const tagClass = tag === 'p' ? styles.paragraph : null;

  return (
    <Tag className={`${sizeClasses[size]} ${tagClass}`} {...props}>
      <AntdText type={type}>{children}</AntdText>
    </Tag>
  );
};

Text.propTypes = {
  tag: PropTypes.string,
  size: PropTypes.oneOf(Object.values(SIZE)),
  type: PropTypes.string,
  children: PropTypes.node,
};

Text.defaultProps = {
  tag: 'p',
  size: SIZE.NORMAL,
  type: null,
  children: null,
};

export default Object.assign(Text, { SIZE });
