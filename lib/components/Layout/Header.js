import React from 'react';
import PropTypes from 'prop-types';
import { expandChildren } from '@/helpers';
import { Heading, Menu } from '@';
import logoWhite from './assets/virtru-logo-white-rgb.svg';
import HeaderMenus, {
  MENU_ALIGNMENTS_LIST,
  MENU_ALIGNMENTS_DEFAULT,
  MENU_ALIGNMENTS,
} from './HeaderMenus';

import styles from './Header.css';

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
function Header({ children, company, logo, title, menuAlignmentDefault }) {
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
      <HeaderMenus defaultAlginment={menuAlignmentDefault}>{MenuComponents}</HeaderMenus>
    </div>
  );
}

Header.MENU_ALIGNMENTS = MENU_ALIGNMENTS;

Header.displayName = 'Header';

Header.propTypes = {
  logo: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  company: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  menuAlignmentDefault: PropTypes.oneOf(MENU_ALIGNMENTS_LIST),
};

Header.defaultProps = {
  company: 'Virtru',
  children: null,
  logo: logoWhite,
  menuAlignmentDefault: MENU_ALIGNMENTS_DEFAULT,
};

export default Header;
