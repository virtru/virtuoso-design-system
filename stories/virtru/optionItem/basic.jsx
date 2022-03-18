import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import {
  ItemOption,
  Divider,
  WatermarkIcon,
  HourglassIcon,
  NoForwardingIcon,
  InfoTooltip,
  Typography,
  ExpirationPicker,
  LayoutOneThird,
  RichText,
  ReplayRow,
  Input,
  GroupEditor,
} from '@';

const { Title } = Typography;

storiesOf('virtru/optionItem', module).add('basic', () => {
  const [showExpirationPicker, setShowExpirationPicker] = useState(false);
  const changeSwitch = (checked) => {
    console.log(checked);
  };

  const changeSwitchExpirationPicker = (checked) => {
    setShowExpirationPicker(checked);
  };

  const getTime = (time) => {
    console.log(time);
  };

  const getTypeOfReplay = (value) => {
    console.log(value);
  };

  const getEditorData = (value) => {
    console.log(value);
  };

  return (
    <LayoutOneThird
      left={
        <GroupEditor>
          <ReplayRow
            authorEmail="testuser@mail.com"
            recipients={['testuser@mail.com', 'testuser2@mail.com']}
            typeOfReplay={getTypeOfReplay}
          />
          <Divider />
          <Input placeholder="secrets confidential advanced options" bordered={false} />
          <Divider />

          <RichText
            getEditorData={getEditorData}
            placeholder="Encrypted message goes here. Recipient can only view this message after decryption."
          />
        </GroupEditor>
      }
      right={
        <div>
          <Title level={5}>
            Security <InfoTooltip title="security" />
          </Title>
          <div>MESSAGE OPTIONS</div>
          <ItemOption
            icon={<NoForwardingIcon />}
            name="Disable Forwarding"
            changeSwitch={changeSwitch}
            tooltipTitle="Some tooltip text"
          />
          <ItemOption
            icon={<HourglassIcon />}
            name="Expiration Date"
            changeSwitch={changeSwitchExpirationPicker}
            tooltipTitle={<span>text in html tag</span>}
          />
          {showExpirationPicker && <ExpirationPicker getTime={getTime} />}
          <Divider plain />
          <div>
            ATTACHMENT OPTIONS <InfoTooltip title="Some tooltip" />
          </div>
          <ItemOption icon={<WatermarkIcon />} name="Watermarking" changeSwitch={changeSwitch} />
          <ItemOption
            icon={<WatermarkIcon />}
            name="Persistent protection"
            changeSwitch={changeSwitch}
          />
        </div>
      }
    />
  );
});
