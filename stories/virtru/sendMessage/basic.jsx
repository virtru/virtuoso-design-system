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
  FileInput,
  Space,
  FileListItem,
  Row,
  Col,
  Button,
} from '@';

const { Title } = Typography;

storiesOf('virtru/optionItem', module).add('basic', () => {
  const [showExpirationPicker, setShowExpirationPicker] = useState(false);
  const [fileList, setFileList] = useState([]);

  const changeSwitch = (checked) => {
    // eslint-disable-next-line no-console
    console.log(checked);
  };

  const changeSwitchExpirationPicker = (checked) => {
    setShowExpirationPicker(checked);
  };

  const getTime = (time) => {
    // eslint-disable-next-line no-console
    console.log(time);
  };

  const getTypeOfReplay = (value) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  const getEditorData = (value) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  const getFileList = (data) => {
    setFileList([...data]);
  };

  const handleClickRemove = (name) => {
    // eslint-disable-next-line no-console
    console.log(name);
  };

  return (
    <LayoutOneThird
      left={
        <Space direction="vertical" style={{ width: '100%' }}>
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
          <GroupEditor>
            <Space direction="vertical" style={{ width: '100%' }}>
              <FileInput fileList={getFileList} />
              <div style={{ padding: '0 12px 12px' }}>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Row justify="space-between">
                    <Col>{fileList.length} File(s) Added</Col>
                    <Col>
                      <Button size="small" disabled={fileList.length === 0}>
                        Remove all
                      </Button>
                    </Col>
                  </Row>
                  {fileList.length > 0 && (
                    <Row gutter={[12, 12]}>
                      {fileList.map((file) => {
                        return (
                          <Col key={file.name} md={12}>
                            <FileListItem
                              name={file.name.split('.')[0]}
                              extension={`.${file.name.split('.')[1]}`}
                              size="1.09 Kb"
                              remove={handleClickRemove}
                              tooltipText="This file is encrypted with no additional security options enabled."
                              warning={false}
                            />
                          </Col>
                        );
                      })}
                    </Row>
                  )}
                </Space>
              </div>
            </Space>
          </GroupEditor>
        </Space>
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
