import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Tooltip from './Tooltip';

describe('Tooltip', () => {
  const overlay = "I'm a firestarter, twisted firestarter";
  const containerText = "You're a firestarter, twisted firestarter";

  describe('with hover trigger', () => {
    let wrapper;
    let container;
    let tooltip;
    const mouseEnterSpy = jest.fn();
    const mouseLeaveSpy = jest.fn();

    beforeEach(async () => {
      wrapper = render(
        <Tooltip
          position={Tooltip.POSITION.TOP}
          arrowPosition={Tooltip.ARROW_POSITION.MIDDLE}
          overlay={overlay}
        >
          <div onMouseEnter={mouseEnterSpy} onMouseLeave={mouseLeaveSpy}>
            {containerText}
          </div>
        </Tooltip>,
      );

      [container, tooltip] = await Promise.all([
        wrapper.findByText(containerText),
        wrapper.queryAllByText(overlay),
      ]);
    });

    it('should render children', () => {
      expect(container).toBeInTheDocument();
      expect(tooltip).toHaveLength(0);
    });

    it('should react to mouse events', async () => {
      fireEvent.mouseEnter(container);
      expect(await wrapper.findByText(overlay)).toBeInTheDocument();

      fireEvent.mouseLeave(container);
      expect(await wrapper.queryAllByText(overlay)).toHaveLength(0);

      expect(mouseEnterSpy).toHaveBeenCalledTimes(1);
      expect(mouseLeaveSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('with render trigger', () => {
    let wrapper;
    let container;
    let tooltip;

    beforeEach(async () => {
      wrapper = render(
        <Tooltip
          trigger={Tooltip.TRIGGER.RENDER}
          position={Tooltip.POSITION.TOP}
          arrowPosition={Tooltip.ARROW_POSITION.MIDDLE}
          overlay={overlay}
        >
          <div>{containerText}</div>
        </Tooltip>,
      );

      [container, tooltip] = await Promise.all([
        wrapper.getByText(containerText),
        wrapper.getByText(overlay),
      ]);
    });

    it('should be visible immediately', () => {
      expect(container).toBeInTheDocument();
      expect(tooltip).toBeInTheDocument();
    });

    it('should ignore mouse events and remain visible', async () => {
      fireEvent.mouseEnter(container);
      expect(await wrapper.findByText(overlay)).toBeInTheDocument();

      fireEvent.mouseLeave(container);
      expect(await wrapper.findByText(overlay)).toBeInTheDocument();
    });
  });
});
