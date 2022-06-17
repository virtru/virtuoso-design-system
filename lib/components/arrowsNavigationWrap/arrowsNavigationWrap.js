import React from 'react';
import PropTypes from 'prop-types';

const ArrowsNavigationWrap = ({ children, tabbingSelector, as, ...props }) => {
  const parentRef = React.useRef(null);

  React.useEffect(() => {
    const parentElement = parentRef.current;

    const arrowsNavigation = (event) => {
      const items = [...parentElement.querySelectorAll(tabbingSelector)];

      const { keyCode } = event;
      const leftArrow = 37;
      const rightArrow = 39;

      if (keyCode === leftArrow || keyCode === rightArrow) {
        const { activeElement } = document;
        let tabFocus = items.indexOf(activeElement.closest(tabbingSelector));

        if (keyCode === rightArrow) {
          if (tabFocus < items.length - 1) tabFocus += 1;
        }
        if (keyCode === leftArrow) {
          if (tabFocus > 0) tabFocus -= 1;
        }
        items[tabFocus].focus();
      }
    };

    parentElement?.addEventListener('keydown', arrowsNavigation);

    return () => {
      parentElement?.removeEventListener('keydown', arrowsNavigation);
    };
  }, [tabbingSelector]);

  return React.createElement(as, { ...props, ref: parentRef }, children);
};

ArrowsNavigationWrap.propTypes = {
  children: PropTypes.node.isRequired,
  tabbingSelector: PropTypes.string.isRequired,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

ArrowsNavigationWrap.defaultProps = {
  as: 'div',
};

export default ArrowsNavigationWrap;
