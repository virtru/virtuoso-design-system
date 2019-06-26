import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Tooltip from './Tooltip';

describe('Tooltip', () => {
  it('should render children and react to mouse events', async () => {
    const overlay = "I'm a firestarter, twisted firestarter";
    const containerText = "You're a firestarter, twisted firestarter";
    const mouseEnterSpy = jest.fn();
    const mouseLeaveSpy = jest.fn();

    const wrapper = render(
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

    const [container, tooltip] = await Promise.all([
      wrapper.findByText(containerText),
      wrapper.queryAllByText(overlay),
    ]);

    expect(container).toBeInTheDocument();
    expect(tooltip).toHaveLength(0);

    fireEvent.mouseEnter(container);
    expect(await wrapper.findByText(overlay)).toBeInTheDocument();

    fireEvent.mouseLeave(container);
    expect(await wrapper.queryAllByText(overlay)).toHaveLength(0);

    expect(mouseEnterSpy).toHaveBeenCalledTimes(1);
    expect(mouseLeaveSpy).toHaveBeenCalledTimes(1);
  });
});
