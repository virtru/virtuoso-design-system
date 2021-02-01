/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object } from '@storybook/addon-knobs';

import { Button, ContentModal, Tabs, Tab, TabPanel, TabList } from '@';

const tabLabels = ['Activity Feed', 'Access Control', 'Security Options'];
const ModalContent = () => (
  <>
    <Tabs size={Tabs.SIZE.SMALL}>
      <TabList>
        {tabLabels.map((label) => (
          <Tab>{label}</Tab>
        ))}
      </TabList>
      {tabLabels.map((label) => (
        <TabPanel>
          <div style={{ padding: '20px' }}>Content for tab {label}</div>
        </TabPanel>
      ))}
    </Tabs>
  </>
);

storiesOf('ContentModal', module).lokiSkip('default', () => {
  const title = object('title', { key: 'Filename', value: 'january-reports.pdf' });
  const subtitle = text(
    'subtitle',
    'Google Drive file shared by khart@acmecorp.com on November 16, 2020, 7:16 am',
  );
  const titleIcon = text('titleIcon', ContentModal.ICONS.PDF);
  const subtitleIcon = text('subtitleIcon', ContentModal.ICONS.DRIVE);

  return (
    <ContentModal
      header={
        <>
          <Button variant={Button.VARIANT.SECONDARY} size={Button.SIZE.SQUARE} />
        </>
      }
      title={title}
      subtitle={subtitle}
      titleIcon={titleIcon}
      subtitleIcon={subtitleIcon}
      onRequestClose={() => alert('close')}
      onRequestBack={() => alert('back')}
    >
      {ModalContent()}
    </ContentModal>
  );
});
