import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object } from '@storybook/addon-knobs';
import { Button, ContentModal, Tabs, Tab, TabList, Icon, Table, TR, TH, TD, THead, TBody } from '@';

const sample = [
  { event: 'Activation Started', details: 'by user@domain.com', date: '2021-07-03' },
  { event: 'Secure File Encrypted', details: 'by user@domain.com', date: '2020-05-02' },
  { event: 'Secure Email Sent', details: 'by user@domain.com', date: '2019-07-01' },
];
const data = new Array(10).fill(sample).flat();

const tabLabels = ['Activity Feed'];

const TabLabels = () => (
  <Tabs size={Tabs.SIZE.SMALL}>
    <TabList>
      {tabLabels.map((label) => (
        <Tab>{label}</Tab>
      ))}
    </TabList>
  </Tabs>
);
const TabContentList = () => (
  <div style={{ marginTop: '-1px' }}>
    <Table isScrollableBody>
      <THead>
        <TR>
          <TH>Event</TH>
          <TH>Details</TH>
          <TH>Date</TH>
        </TR>
      </THead>
      <TBody>
        {data.map((d) => (
          <TR>
            <TD>{d.event}</TD>
            <TD>{d.details}</TD>
            <TD>{d.date}</TD>
          </TR>
        ))}
      </TBody>
    </Table>
  </div>
);

storiesOf('ContentModal', module)
  .lokiSkip('default', () => {
    const title = object('Title', { key: 'Filename', value: 'january-reports.pdf' });
    const subtitle = text(
      'Subtitle',
      'Google Drive file shared by khart@acmecorp.com on November 16, 2020, 7:16 am',
    );
    const titleIconName = text('Title Icon', Icon.NAMES.PDF);
    const subtitleIconName = text('Subtitle Icon', Icon.NAMES.DRIVE);

    return (
      <ContentModal
        modalHeader={<Button variant={Button.VARIANT.SECONDARY} size={Button.SIZE.SQUARE} />}
        title={title}
        subtitle={subtitle}
        titleIconName={titleIconName}
        subtitleIconName={subtitleIconName}
        onCloseClick={() => alert('close')}
        onBackClick={() => alert('back')}
        contentHeader={TabLabels()}
      >
        {TabContentList()}
      </ContentModal>
    );
  })
  .add('minimal', () => (
    <ContentModal title={{ value: 'Random Title' }} subtitle="Random subtitle">
      {TabContentList()}
    </ContentModal>
  ));
