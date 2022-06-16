import React from 'react';
import PropTypes from 'prop-types';

const ArrowsNavigationWrap = ({ children, tabbingSelector, parentSelector }) => {
  let parent = document.querySelector(parentSelector);

  React.useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (parent === null) parent = document.querySelector(parentSelector);

    const arrowsNavigation = (event) => {
      const items = parent.querySelectorAll(tabbingSelector);

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

    parent?.addEventListener('keydown', arrowsNavigation);

    return () => {
      parent?.removeEventListener('keydown', arrowsNavigation);
    };
  }, [parent, parentSelector, tabbingSelector]);

  return children;
};

ArrowsNavigationWrap.propTypes = {
  children: PropTypes.node.isRequired,
  tabbingSelector: PropTypes.string.isRequired,
  parentSelector: PropTypes.string.isRequired,
};

export default ArrowsNavigationWrap;
