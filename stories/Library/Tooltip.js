/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import { Tooltip } from '@';

const positions = Object.values(Tooltip.POSITION);
const [defaultPosition] = positions;

const arrowPositions = Object.values(Tooltip.ARROW_POSITION);
const [defaultArrowPosition] = arrowPositions;

storiesOf('Tooltip', module).lokiSkip('default', () => (
  <Tooltip
    overlay={text('Overlay', '12/19/2016 10:42:00 PM')}
    position={select('Position', positions, defaultPosition)}
    arrowPosition={select('Arrow position', arrowPositions, defaultArrowPosition)}
  >
    <button type="button">Hover Me</button>
  </Tooltip>
));
