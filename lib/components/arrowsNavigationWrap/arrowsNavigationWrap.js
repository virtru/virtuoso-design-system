import React from 'react';
import PropTypes from 'prop-types';

const ArrowsNavigationWrap = ({ children, tabbingSelector, parentSelector }) => {
  React.useLayoutEffect(() => {
    const itemsParent = document.querySelector(parentSelector);

    const arrowsNavigation = (event) => {
      const items = document.querySelectorAll(tabbingSelector);

      items.forEach((item, ind) => {
        item.setAttribute('data-tab-id', ind);
      });
      const { keyCode, target } = event;
      const leftArrow = 37;
      const rightArrow = 39;

      if (keyCode === leftArrow || keyCode === rightArrow) {
        let tabFocus =
          +target.getAttribute('data-tab-id') ||
          +target.closest(tabbingSelector).getAttribute('data-tab-id');

        if (keyCode === rightArrow) {
          if (tabFocus < items.length - 1) tabFocus += 1;
        }
        if (keyCode === leftArrow) {
          if (tabFocus > 0) tabFocus -= 1;
        }
        items[tabFocus].focus();
      }
    };

    itemsParent.addEventListener('keydown', arrowsNavigation);

    return () => {
      itemsParent.removeEventListener('keydown', arrowsNavigation);
    };
  }, [parentSelector, tabbingSelector]);

  return children;
};

ArrowsNavigationWrap.propTypes = {
  children: PropTypes.node.isRequired,
  tabbingSelector: PropTypes.string.isRequired,
  parentSelector: PropTypes.string.isRequired,
};

export default ArrowsNavigationWrap;
