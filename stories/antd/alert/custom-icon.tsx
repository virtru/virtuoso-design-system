import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Alert } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const icon = <SmileOutlined />;

storiesOf('antd/alert', module).add('custom-icon', () => 
  <>
    <Alert icon={icon} message="showIcon = false" type="success" />
    <Alert icon={icon} message="Success Tips" type="success" showIcon />
    <Alert icon={icon} message="Informational Notes" type="info" showIcon />
    <Alert icon={icon} message="Warning" type="warning" showIcon />
    <Alert icon={icon} message="Error" type="error" showIcon />
    <Alert
      icon={icon}
      message="Success Tips"
      description="Detailed description and advices about successful copywriting."
      type="success"
      showIcon
    />
    <Alert
      icon={icon}
      message="Informational Notes"
      description="Additional description and informations about copywriting."
      type="info"
      showIcon
    />
    <Alert
      icon={icon}
      message="Warning"
      description="This is a warning notice about copywriting."
      type="warning"
      showIcon
    />
    <Alert
      icon={icon}
      message="Error"
      description="This is an error message about copywriting."
      type="error"
      showIcon
    />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>A relevant icon makes information clearer and more friendly.</p></>) } });