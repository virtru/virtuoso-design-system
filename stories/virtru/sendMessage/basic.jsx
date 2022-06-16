import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import {
  ItemOption,
  Divider,
  WatermarkIcon,
  HourglassIcon,
  PersistentProtectionIcon,
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
  ArrowsNavigationWrap,
} from '@';

const { Title } = Typography;

storiesOf('virtru/sendMessage', module).add('basic', () => {
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

  const handleClickRemove = () => {
    // eslint-disable-next-line no-console
    console.log('handleClickRemove function');
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
              ariaLabel="Encrypted message"
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
                    <Row gutter={[12, 12]} id="itemsList">
                      <ArrowsNavigationWrap
                        tabbingSelector="[data-testid='item-wrapper']"
                        parentSelector="#itemsList"
                      >
                        {fileList.map((file) => {
                          return (
                            <Col key={file.name} md={12}>
                              <FileListItem
                                name={file.name.split('.')[0]}
                                extension={`.${file.name.split('.')[1]}.tdf`}
                                decryptedExt={`${file.name.split('.')[1]}`}
                                size="1.09 Kb"
                                tooltipText="This file is encrypted with no additional security options enabled."
                                warning={false}
                                tabIndex="0"
                                button={
                                  <Button type="primary" size="small" onClick={handleClickRemove}>
                                    Remove
                                  </Button>
                                }
                              />
                            </Col>
                          );
                        })}
                      </ArrowsNavigationWrap>
                    </Row>
                  )}
                </Space>
              </div>
            </Space>
          </GroupEditor>
        </Space>
      }
      right={
        <div
          style={{
            display: 'flex',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
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
              disabled
            />
            <ItemOption
              icon={<HourglassIcon />}
              name="Expiration Date"
              changeSwitch={changeSwitchExpirationPicker}
              tooltipTitle={<span>text in html tag</span>}
              disabled={false}
            />
            {showExpirationPicker && <ExpirationPicker getTime={getTime} />}
            <Divider plain />
            <div>
              ATTACHMENT OPTIONS <InfoTooltip title="Some tooltip" />
            </div>
            <ItemOption
              icon={<WatermarkIcon />}
              name="Watermarking"
              changeSwitch={changeSwitch}
              disabled={false}
              hasValue
            />
            <ItemOption
              icon={<PersistentProtectionIcon />}
              name="Persistent protection"
              changeSwitch={changeSwitch}
              disabled={false}
            />
          </div>
          <Row justify="end">
            <Space>
              <Button>Cancel</Button>
              <Button type="primary">Send</Button>
            </Space>
          </Row>
        </div>
      }
    />
  );
});
