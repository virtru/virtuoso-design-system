import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Menu } from '@';
import { expandChildren } from '@/helpers';
import logoWhite from './assets/virtru-logo-white-rgb.svg';

import styles from './styles/header.css';

/**
 *
 * @param {string} param0.logo logo url
 * @param {string} param0.name branding name
 */
function Branding({ logo, name }) {
  if (typeof logo === 'string') {
      return <img className={styles.brandingLogo} src={logo} alt={name} />;
  } else if (logo === 'false') {
    return <span className={styles.brandingText}>{name}</span>;
  } else {
    const Logo = logoWhite;
    return <div className={styles.brandingLogo}><Logo height={20} /></div>
  }
}

/**
 * Header Component that displays content at the top of the page.
 */
function Header({ children, company, logo, title }) {
  const [
    nextChildren,
    { Menu: MenuComponents },
  ] = expandChildren(children, [Menu]);
  return (
    <div className={styles.container}>
      <div className={styles.branding}>
        <Branding logo={logo} name={name} />
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
  logo: PropTypes.node,
  company: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Header.defaultProps = {
  company: 'Virtru'
}

export default Header;
