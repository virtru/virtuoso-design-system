/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import styles from 'lib/styles/build/js/design_tokens';
import { Button, ContentModal } from '@';

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => (
  <div style={{ maxWidth: '400px', display: 'flex', flexGrow: '1' }}>{children}</div>
);

const ModalContentLarge = () => (
  <div
    style={{
      background: styles.vds.color.white.value,
      // padding: '20px',
      width: '1008',
      height: '812px',
    }}
  />
);

storiesOf('ContentModal', module).lokiSkip('default', () => {
  const isOpened = boolean('ContentModal is opened', true);
  const title = text('ContentModal title', 'Warning this is a ContentModal Title');

  return (
    <Container>
      {isOpened && (
        <ContentModal
          titleKey={title}
          onRequestClose={() => alert('close')}
          onRequestBack={() => alert('back')}
        >
          {' '}
          {ModalContentLarge()}{' '}
        </ContentModal>
      )}
    </Container>
  );
});
