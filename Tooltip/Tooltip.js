import React, { forwardRef, useLayoutEffect, useRef, useState, cloneElement } from 'react';
import PropTypes from 'prop-types';
import usePortal from '../../helpers/usePortal';
import styles from './Tooltip.css';

const POSITION = {
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left',
};

const ARROW_POSITION = {
  START: 'start',
  MIDDLE: 'middle',
  END: 'end',
};

const reversePosition = {
  [POSITION.TOP]: POSITION.BOTTOM,
  [POSITION.RIGHT]: POSITION.LEFT,
  [POSITION.BOTTOM]: POSITION.TOP,
  [POSITION.LEFT]: POSITION.RIGHT,
};

const Tooltip = forwardRef(({ overlay, position, arrowPosition }, ref) => (
  <div className={styles[`container-${position}-${arrowPosition}`]} ref={ref}>
    <div className={styles[`arrow-${reversePosition[position]}-${arrowPosition}`]} />
    {overlay}
  </div>
));

Tooltip.propTypes = {
  overlay: PropTypes.node,
  position: PropTypes.oneOf(Object.values(POSITION)).isRequired,
  arrowPosition: PropTypes.oneOf(Object.values(ARROW_POSITION)),
};

Tooltip.defaultProps = {
  overlay: null,
  arrowPosition: ARROW_POSITION.MIDDLE,
};

const TooltipWrapper = ({ children, ...tooltipProps }) => {
  const childrenRef = useRef(null);
  const tooltipRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    if (isVisible) {
      const rect = childrenRef.current.getBoundingClientRect();
      let { top, left } = rect;

      const isHorizontal = [POSITION.LEFT, POSITION.RIGHT].includes(tooltipProps.position);

      if (isHorizontal) {
        // eslint-disable-next-line no-magic-numbers
        top += Math.ceil(rect.height / 2);

        if (tooltipProps.position === POSITION.RIGHT) {
          left += rect.width;
        }
      } else {
        if (tooltipProps.arrowPosition === ARROW_POSITION.MIDDLE) {
          // eslint-disable-next-line no-magic-numbers
          left += Math.ceil(rect.width / 2);
        } else if (tooltipProps.arrowPosition === ARROW_POSITION.END) {
          left += rect.width;
        }

        if (tooltipProps.position === POSITION.BOTTOM) {
          top += rect.height;
        }
      }

      tooltipRef.current.style.cssText = `
        top: ${top}px;
        left: ${left}px;
      `;
    }
  }, [isVisible, childrenRef, tooltipRef, tooltipProps.position, tooltipProps.arrowPosition]);

  const { props: childrenProps } = children;
  const extendedChildrenProps = {
    ...childrenProps,
    onMouseEnter(event) {
      if (childrenProps.onMouseEnter) {
        childrenProps.onMouseEnter(event);
      }

      setIsVisible(true);
    },

    onMouseLeave(event) {
      if (childrenProps.onMouseLeave) {
        childrenProps.onMouseLeave(event);
      }

      setIsVisible(false);
    },
  };

  return [
    cloneElement(children, { ref: childrenRef, ...extendedChildrenProps }),
    // We could wrap children with a div that has position: relative
    // and then position a Tooltip relatively to this wrapper
    // but this approach may break children positioning if children has position: absolute.
    // To avoid situation like this we render a Tooltip into the document.body
    // and then use children bounding rectangle to position a Tooltip by setting
    // top and left style properties.
    usePortal(isVisible && <Tooltip {...tooltipProps} ref={tooltipRef} />),
  ];
};

export default Object.assign(TooltipWrapper, {
  POSITION,
  ARROW_POSITION,
});
