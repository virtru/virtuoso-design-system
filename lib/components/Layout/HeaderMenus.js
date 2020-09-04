import React from 'react';
import PropTypes from 'prop-types';
import { choiceOfChoices } from '@/helpers';
import { Menu } from '@';

import styles from './HeaderMenus.css';

const MENU_ALIGNMENT_LEFT = 'menuAlignmentLeft';
const MENU_ALIGNMENT_RIGHT = 'menuAlignmentRight';
export const MENU_ALIGNMENTS = { MENU_ALIGNMENT_LEFT, MENU_ALIGNMENT_RIGHT };
export const MENU_ALIGNMENTS_DEFAULT = MENU_ALIGNMENT_LEFT;
export const MENU_ALIGNMENTS_LIST = Object.values(MENU_ALIGNMENTS);

const getMenuAlignment = choiceOfChoices(MENU_ALIGNMENTS_LIST, MENU_ALIGNMENTS_DEFAULT);

/**
 * Render left and right aligned menus as nav variant
 *
 * This component is consumed internally and not exposed to the developer
 *
 * @param {array} menus Menus components
 */
function HeaderMenus({ children, menuAlignmentDefault }) {
  let mainMenu;
  const menuComponentsByAlignments = {
    [MENU_ALIGNMENT_LEFT]: [],
    [MENU_ALIGNMENT_RIGHT]: [],
  };

  // Iterate over the menu items and sort into various alignments
  // Additionally add an aria label to the menu that is "Main menu"
  React.Children.forEach(children, (menu) => {
    // Clone menu to force config
    const nextMenu = React.cloneElement(menu, {
      ...menu.props,
      variant: Menu.VARIANTS.VARIANT_NAV,
    });
    const menuAlignment = getMenuAlignment(menu.props.align);
    let classNames = styles[menuAlignment];
    let aria;

    // If main menu isn't set and the menu is on the default side
    if (!mainMenu && menuAlignment === menuAlignmentDefault) {
      if (!mainMenu) {
        mainMenu = true;
        classNames = styles.mainMenu;
        aria = 'Main menu';
      }
    }

    // Add the menu to the appropriate menu alignment array
    menuComponentsByAlignments[menuAlignment].push(
      <div className={classNames} aria-label={aria}>
        {nextMenu}
      </div>,
    );
  });

  // Render menu
  return (
    <div className={styles.menuWrapper}>
      <div className={styles.menuLeftAlignWrapper}>
        {menuComponentsByAlignments[MENU_ALIGNMENT_LEFT]}
      </div>
      <div className={styles.menuRightAlignWrapper}>
        {menuComponentsByAlignments[MENU_ALIGNMENT_RIGHT]}
      </div>
    </div>
  );
}

HeaderMenus.MENU_ALIGNMENTS = MENU_ALIGNMENTS;

HeaderMenus.propTypes = {
  children: PropTypes.node.isRequired,
  menuAlignmentDefault: PropTypes.oneOf(MENU_ALIGNMENTS_LIST).isRequired,
};

export default HeaderMenus;
