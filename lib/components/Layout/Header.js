import React from 'react';
import PropTypes from 'prop-types';
import { expandChildren } from '@/helpers';
import { Heading, Menu } from '@';
import logoWhite from './assets/virtru-logo-white-rgb.svg';

import styles from './styles/header.css';

/**
 *
 * @param {string} param0.logo logo url
 * @param {string} param0.company company name
 */
function Branding({ logo, company }) {
  if (typeof logo === 'string') {
    return <img className={styles.brandingLogo} src={logo} alt={company} />;
  }
  if (logo === false) {
    return <span className={styles.brandingText}>{company}</span>;
  }
  const Logo = logo;
  return (
    <div className={styles.brandingLogo}>
      <Logo height={20} />
    </div>
  );
}

Branding.displayName = 'Branding';

Branding.propTypes = {
  company: PropTypes.string,
  logo: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

Branding.defaultProps = {
  company: 'Virtru',
  logo: logoWhite,
};

/**
 * Header Component that displays content at the top of the page.
 */
function Header({ children, company, logo, title }) {
  const [, { Menu: MenuComponents }] = expandChildren(children, [Menu]);
  return (
    <div className={styles.container}>
      <div className={styles.branding} aria-label={`${company} application`}>
        <Branding logo={logo} company={company} />
      </div>
      <div className={styles.delimiter} />
      <span className={styles.headerText}>
        <Heading size={Heading.SIZE.SMALL} rank={1} aria-label={`${title} application`}>
          {title}
        </Heading>
      </span>
      <div className={styles.menu} aria-label="Main menu">
        {MenuComponents}
      </div>
    </div>
  );
}

Header.displayName = 'Header';

Header.propTypes = {
  logo: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  company: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

Header.defaultProps = {
  company: 'Virtru',
  children: null,
  logo: logoWhite,
};

export default Header;
