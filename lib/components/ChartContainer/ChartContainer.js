import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Heading, Button, Chevron } from '@';
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
  select,
  onSettingsClick,
  onBackClick,
  loading,
  children,
}) {
  const subtitleStyle = cn(styles.subtitle, onBackClick ? styles.withBack : styles.withNoBack);
  const titleStyle = cn(styles.title, onBackClick ? styles.leftItem : styles.withNoBack);

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.rowContent}>
          {onBackClick && (
            <div className={styles.leftItem} data-testid="VDS-chart-back-button">
              <Button
                disabled={loading}
                onClick={onBackClick}
                variant={Button.VARIANT.SECONDARY}
                size={Button.SIZE.SQUARE}
              >
                <div className={styles.chevron}>
                  <Chevron variant={Chevron.VARIANT.THICK} direction={Chevron.DIRECTION.LEFT} />
                </div>
              </Button>
            </div>
          )}
          <div className={titleStyle}>
            <Heading size={Heading.SIZE.XSMALL} rank={1} noMargin>
              {title}
            </Heading>
          </div>
        </div>
        <div className={styles.rowContent}>
          <div className={cn(styles.select)}>{select}</div>
          {onSettingsClick && (
            <div className={cn(styles.rightItem, styles.settings)}>
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
      <div className={styles.content}> {children} </div>
    </div>
  );
}

ChartContainer.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.node,
  select: PropTypes.node,
  onSettingsClick: PropTypes.func,
  onBackClick: PropTypes.func,
  loading: PropTypes.bool,
  children: PropTypes.node,
};

ChartContainer.defaultProps = {
  title: '',
  subtitle: null,
  select: null,
  onSettingsClick: null,
  onBackClick: null,
  loading: false,
  children: null,
};

export default ChartContainer;
