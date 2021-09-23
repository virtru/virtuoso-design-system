import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button, Tooltip } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

function getGroup(props) {
  return (
    <div>
      <Button.Group {...props}>
        <Button type="primary">Button 1</Button>
        <Button type="primary">Button 2</Button>
        <Tooltip title="Tooltip">
          <Button type="primary" icon={<DownloadOutlined />} disabled />
        </Tooltip>
        <Tooltip title="Tooltip">
          <Button type="primary" icon={<DownloadOutlined />} />
        </Tooltip>
      </Button.Group>
    </div>
  );
}

storiesOf('Components/Ant Design/Button', module).add('legacy-group', () => 
  <>
    {getGroup({ size: 'small' })}
    <br />
    {getGroup()}
    <br />
    {getGroup({ size: 'large' })}
  </>,
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/button/" target="_blank">
                  documentation on Button component
                </a>.
              </>
            ) }
        });