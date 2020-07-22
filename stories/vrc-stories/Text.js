/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { color, select, text } from '@storybook/addon-knobs';

import { Text } from '../lib';

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => <div style={{ maxWidth: '575px' }}>{children}</div>;

const sizes = Object.values(Text.SIZE);
const defaultSize = Text.SIZE.NORMAL;

const exampleText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac nunc ut lacus commodo efficitur. Sed ultrices eu enim in auctor. Nullam consectetur augue vitae metus ornare finibus. Sed blandit risus dignissim lacinia placerat. Nullam et risus porttitor nibh iaculis dignissim et quis elit.';

storiesOf('Text', module)
  .lokiSkip('default', () => (
    <Container>
      <Text
        tag={text('Tag', 'p')}
        size={select('Size', sizes, defaultSize)}
        color={color('Color', '#000')}
      >
        {text('Text', exampleText)}
      </Text>
      <Text
        tag={text('Tag', 'p')}
        size={select('Size', sizes, defaultSize)}
        color={color('Color', '#000')}
      >
        {text('Text', exampleText)}
      </Text>
    </Container>
  ))
  .add('all sizes - p', () => (
    <Container>
      <Text tag="p" size={Text.SIZE.NORMAL}>
        NORMAL - {exampleText}
      </Text>
      <Text tag="p" size={Text.SIZE.SMALL}>
        SMALL - {exampleText}
      </Text>
      <Text tag="p" size={Text.SIZE.XSMALL}>
        XSMALL - {exampleText}
      </Text>
      <Text tag="p" size={Text.SIZE.XXSMALL}>
        XXSMALL - {exampleText}
      </Text>
    </Container>
  ))
  .add('all sizes - div', () => (
    <Container>
      <Text tag="div" size={Text.SIZE.NORMAL}>
        NORMAL - {exampleText}
      </Text>
      <Text tag="div" size={Text.SIZE.SMALL}>
        SMALL - {exampleText}
      </Text>
      <Text tag="div" size={Text.SIZE.XSMALL}>
        XSMALL - {exampleText}
      </Text>
      <Text tag="div" size={Text.SIZE.XXSMALL}>
        XXSMALL - {exampleText}
      </Text>
    </Container>
  ))
  .add('colored', () => (
    <Container>
      <Text tag="div" size={Text.SIZE.NORMAL} color="darkgray">
        NORMAL - {exampleText}
      </Text>
    </Container>
  ));
