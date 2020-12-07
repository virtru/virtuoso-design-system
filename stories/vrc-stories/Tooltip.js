/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import { Tooltip } from '@';

const triggers = Object.values(Tooltip.TRIGGER);
const [defaultTrigger] = triggers;

const variants = Object.values(Tooltip.VARIANT);
const [defaultVariant] = variants;

const positions = Object.values(Tooltip.POSITION);
const [defaultPosition] = positions;

const arrowPositions = Object.values(Tooltip.ARROW_POSITION);
const [defaultArrowPosition] = arrowPositions;

storiesOf('Tooltip', module)
  .lokiSkip('default', () => (
    <Tooltip
      overlay={text('Overlay', '12/19/2016 10:42:00 PM')}
      trigger={select('Trigger', triggers, defaultTrigger)}
      variant={select('Variant', variants, defaultVariant)}
      position={select('Position', positions, defaultPosition)}
      arrowPosition={select('Arrow position', arrowPositions, defaultArrowPosition)}
    >
      <button type="button">Hover Me</button>
    </Tooltip>
  ))
  .add('error', () => (
    <Tooltip
      overlay={text('Overlay', 'A thoughtful error message and how to recover.')}
      trigger={select('Trigger', triggers, Tooltip.TRIGGER.RENDER)}
      variant={select('Variant', variants, Tooltip.VARIANT.ERROR)}
      position={select('Position', positions, defaultPosition)}
      arrowPosition={select('Arrow position', arrowPositions, defaultArrowPosition)}
    >
      <button type="button">Renders an error</button>
    </Tooltip>
  ));
