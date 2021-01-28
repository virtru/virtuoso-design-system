/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { Button, ContentModal } from '@';

const ModalContentLarge = () => (
  <div
    style={{
      // background: styles.vds.color.white.value,
      width: '1008',
      // height: '812px',
      height: '200px',
    }}
  />
);

storiesOf('ContentModal', module).lokiSkip('default', () => {
  const titleKey = text('Filename:');
  const titleValue = text('january-reports.pdf');

  return (
    <ContentModal
      header={<Button variant={Button.VARIANT.SECONDARY} size={Button.SIZE.SQUARE} />}
      titleKey={titleKey}
      titleValue={titleValue}
      onRequestClose={() => alert('close')}
      onRequestBack={() => alert('back')}
    >
      {' '}
      {ModalContentLarge()}{' '}
    </ContentModal>
  );
});
