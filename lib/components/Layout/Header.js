import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Menu } from '@';
import { expandChildren } from '@/helpers';

import styles from './styles/header.css';

/**
 *
 * @param {string} param0.logo logo url
 * @param {string} param0.name branding name
 */
function Branding({ logo, name }) {
  return logo ? (
    <img className={styles.brandingLogo} src={logo} alt={name} />
  ) : (
    <span className={styles.brandingText}>{name}</span>
  );
}

/**
 * Header Component that displays content at the top of the page.
 */
function Header({ branding = {}, children, title }) {
  const [
    nextChildren,
    { Menu: MenuComponents },
  ] = expandChildren(children, [Menu]);
  return (
    <div className={styles.container}>
      <div className={styles.branding}>
        <Branding logo={branding.logo} name={branding.name} />
      </div>
      <div className={styles.delimiter} />
      <span className={styles.headerText}>
        <Heading size={Heading.SIZE.SMALL} rank={1}>{title}</Heading>
      </span>
      {MenuComponents}
    </div>
  );
}

Header.propTypes = {
  branding: PropTypes.oneOf([PropTypes.node, PropTypes.string]).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
