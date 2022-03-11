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
  TextEditor,
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

  return (
    <LayoutOneThird
      left={
        <div>
          <TextEditor />
        </div>
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
