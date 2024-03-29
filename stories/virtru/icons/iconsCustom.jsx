import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import {
  Space,
  LogoVirtruIcon,
  CustomIconAvatar,
  CustomIconArrow,
  WatermarkIcon,
  HourglassIcon,
  NoForwardingIcon,
  ReplyArrowIcon,
  PersistentProtectionIcon,
  IconTypeFile,
} from '@';

import stylesMenu from '../../../lib/components/dropdown/topMenuDropdown.css';
import styles from '../../../lib/components/layout/header.css';

storiesOf('virtru/iconsCustom', module).add(
  'basic',
  () => (
    <>
      <Space style={{ background: 'black', padding: '24px' }}>
        <LogoVirtruIcon className={styles.vdsLogo} />
        <CustomIconAvatar className={stylesMenu.vdsAvatarIcon} />
        <CustomIconArrow className={stylesMenu.vdsArrow} />
      </Space>

      <br />

      <Space>
        <WatermarkIcon />
        <HourglassIcon />
        <NoForwardingIcon />
        <ReplyArrowIcon />
        <PersistentProtectionIcon />
        <IconTypeFile />
      </Space>
    </>
  ),
  {
    docs: {
      page: () => (
        <>
          <h1 id="enus">en-US</h1>
          <p>
            There are <code>default</code> switch
          </p>
        </>
      ),
    },
  },
);
