import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Heading, Button, Select, Chevron } from '@';
import SettingsIcon from './assets/settings.svg';

import styles from './ChartContainer.css';

/**
 * Container component for Charts
 * @param title - big bold title
 * @param subtitle - smaller subtitle underneath
 * @param showSettingsButton - defines if button should grow to 100% width
 * @param children
 * @param props
 * @returns {*}
 * @constructor
 */
function ChartContainer({
  title,
  subtitle,
  showSelect,
  onSettingsClick,
  onBackClick,
  loading,
  children,
  ...props
}) {
  const subtitleStyle = cn(
    styles.subtitleDefault,
    onBackClick ? styles.subtitleWithBack : styles.subtitleNoBack,
  );
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.rowContent}>
          {onBackClick && (
            <div className={styles.leftItem}>
              <Button
                disabled={loading}
                onClick={onBackClick}
                variant={Button.VARIANT.SECONDARY}
                size={Button.SIZE.SQUARE}
              >
                <Chevron variant={Chevron.VARIANT.THICKER} direction={Chevron.DIRECTION.LEFT} />
              </Button>
            </div>
          )}
          <div className={styles.leftItem}>
            <div className={styles.title}>
              <Heading size={Heading.SIZE.XSMALL} rank={1} noMargin>
                {title}
              </Heading>
            </div>
          </div>
        </div>
        <div className={styles.rowContent}>
          {showSelect && (
            <div className={cn(styles.select, styles.rightItem)}>
              <Select {...props} />
            </div>
          )}

          {onSettingsClick && (
            <div className={styles.rightItem}>
              <Button
                disabled={loading}
                onClick={onSettingsClick}
                variant={Button.VARIANT.SECONDARY}
                size={Button.SIZE.SQUARE}
              >
                <SettingsIcon />
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className={subtitleStyle}>{subtitle}</div>
      {children}
    </div>
  );
}

ChartContainer.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  showSelect: PropTypes.bool,
  onSettingsClick: PropTypes.func,
  onBackClick: PropTypes.func,
  loading: PropTypes.bool,
  children: PropTypes.node,
};

ChartContainer.defaultProps = {
  title: '',
  subtitle: '',
  showSelect: false,
  onSettingsClick: null,
  onBackClick: null,
  loading: false,
  children: null,
};

export default ChartContainer;
