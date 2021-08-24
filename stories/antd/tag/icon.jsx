import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Tag } from 'antd';
import {
  TwitterOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';

storiesOf('antd/tag', module).add('icon', () => 
  <>
    <Tag icon={<TwitterOutlined />} color="#55acee">
      Twitter
    </Tag>
    <Tag icon={<YoutubeOutlined />} color="#cd201f">
      Youtube
    </Tag>
    <Tag icon={<FacebookOutlined />} color="#3b5999">
      Facebook
    </Tag>
    <Tag icon={<LinkedinOutlined />} color="#55acee">
      LinkedIn
    </Tag>
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p><code>Tag</code> components can contain an <code>Icon</code>. This is done by setting the <code>icon</code> property or placing an <code>Icon</code> component within the <code>Tag</code>.</p>
<p>If you want specific control over the positioning and placement of the <code>Icon</code>, then that should be done by placing the <code>Icon</code> component within the <code>Tag</code> rather than using the <code>icon</code> property.</p></>) } });