/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import styles from 'lib/styles/build/js/design_tokens';
import { Button, Modal } from '@';

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => (
  <div style={{ maxWidth: '400px', display: 'flex', flexGrow: '1' }}>{children}</div>
);

const ModalFooter = () => (
  <>
    <Button size={Button.SIZE.MEDIUM} variant={Button.VARIANT.SECONDARY}>
      Cancel
    </Button>
    <Button size={Button.SIZE.MEDIUM} variant={Button.VARIANT.PRIMARY}>
      Ok
    </Button>
  </>
);

const ModalContentSmall = () => (
  <div
    style={{
      color: styles.vds.color.slate.darkest.value,
      font: "normal 13px 'Open Sans', Helvetica, Arial, sans-serif",
      lineHeight: '18px',
    }}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum sapien ut libero rutrum
    tristique.
  </div>
);

const ModalContentLarge = () => (
  <div
    style={{
      background: styles.vds.color.red.lightest.value,
      padding: '20px',
      maxWidth: '800px',
      height: '300px',
    }}
  />
);

storiesOf('Modal', module)
  .lokiSkip('default', () => {
    const isOpened = boolean('Modal is opened', true);
    const title = text('Modal title', 'Warning this is a Modal Title');

    return (
      <Container>
        {isOpened && (
          <Modal
            title={title}
            variant={Modal.VARIANT.SMALL}
            footer={<ModalFooter />}
            showCloseButton={false}
          >
            <ModalContentSmall />
          </Modal>
        )}
      </Container>
    );
  })
  .add('small - no content', () => (
    <Container>
      <Modal
        title="Warning this is a Modal Title"
        variant={Modal.VARIANT.SMALL}
        showCloseButton={false}
      />
    </Container>
  ))
  .add('small - no content dark', () => (
    <Container>
      <Modal
        title="Warning this is a Modal Title"
        variant={Modal.VARIANT.SMALL}
        headerTheme={Modal.HEADER_THEME.DARK}
        showCloseButton={false}
      />
    </Container>
  ))
  .add('small - with content', () => (
    <Container>
      <Modal
        title="Warning this is a Modal Title"
        variant={Modal.VARIANT.SMALL}
        footer={<ModalFooter />}
        showCloseButton={false}
      >
        <ModalContentSmall />
      </Modal>
    </Container>
  ))
  .add('small - with content - dark header', () => (
    <Container>
      <Modal
        title="Warning this is a Modal Title"
        variant={Modal.VARIANT.SMALL}
        headerTheme={Modal.HEADER_THEME.DARK}
        footer={<ModalFooter />}
        showCloseButton={false}
      >
        <ModalContentSmall />
      </Modal>
    </Container>
  ))
  .add('small - with content - dark header info', () => (
    <Container>
      <Modal
        title="Remove attribute From 'Full Name'"
        variant={Modal.VARIANT.SMALL}
        headerTheme={Modal.HEADER_THEME.DARK}
        titleIcon={Modal.TITLE_ICON.INFO}
        footer={<ModalFooter />}
        showCloseButton={false}
      >
        <ModalContentSmall />
      </Modal>
    </Container>
  ))
  .add('small - with content - light header info', () => (
    <Container>
      <Modal
        title="Remove attribute From 'Full Name'"
        variant={Modal.VARIANT.SMALL}
        headerTheme={Modal.HEADER_THEME.LIGHT}
        titleIcon={Modal.TITLE_ICON.INFO}
        footer={<ModalFooter />}
        showCloseButton={false}
      >
        <ModalContentSmall />
      </Modal>
    </Container>
  ))
  .add('large - no footer buttons', () => (
    <Container>
      <Modal
        title="This is an interactive modal frame... put stuff below in the pink area"
        variant={Modal.VARIANT.LARGE}
        showCloseButton
      >
        <ModalContentLarge />
      </Modal>
    </Container>
  ))
  .add('large - no footer buttons dark', () => (
    <Container>
      <Modal
        title="This is an interactive modal frame... put stuff below in the pink area"
        variant={Modal.VARIANT.LARGE}
        headerTheme={Modal.HEADER_THEME.DARK}
        showCloseButton
      >
        <ModalContentLarge />
      </Modal>
    </Container>
  ))
  .add('large - with footer buttons', () => (
    <Container>
      <Modal
        title="This is an interactive modal frame... put stuff below in the pink area"
        variant={Modal.VARIANT.LARGE}
        footer={<ModalFooter />}
      >
        <ModalContentLarge />
      </Modal>
    </Container>
  ));
