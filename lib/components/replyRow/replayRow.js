import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DownOutlined } from '@ant-design/icons';
import { ReactComponent as Reply } from '../../assets/reply-arrow.svg';
import { ReactComponent as ReplyAll } from '../../assets/reply-all-arrow.svg';
import { Dropdown, Button, Menu, Row, Col } from '@';

import styles from './replayRow.css';

const ReplayRow = ({ authorEmail, recipients, typeOfReplay }) => {
  const [replyAll, setReplyAll] = useState(false);

  const handleMenuClick = (e) => {
    if (e.key === 'replay_all') {
      setReplyAll(true);
    } else {
      setReplyAll(false);
    }
    typeOfReplay(e.key);
  };

  const menu = (
    <Menu onClick={handleMenuClick} mode="inline">
      <Menu.Item key="secure_replay">Secure Reply</Menu.Item>
      {recipients?.length > 1 && <Menu.Item key="replay_all">Reply All</Menu.Item>}
    </Menu>
  );

  const menuRecipients = (
    <Menu mode="inline" style={{ pointerEvents: 'none' }}>
      {recipients?.map((recipient) => (
        <Menu.Item key={recipient}>{recipient}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Row justify="space-between" className={styles.row}>
      <Col>
        <Dropdown overlay={menu} trigger="click">
          <Button type="link">
            <span className={styles.iconReply}>{replyAll ? <ReplyAll /> : <Reply />}</span>
            <DownOutlined />
          </Button>
        </Dropdown>
        {authorEmail}
      </Col>
      <Col>
        {replyAll && (
          <Dropdown overlay={menuRecipients}>
            <Button type="link">+{recipients?.length} more</Button>
          </Dropdown>
        )}
      </Col>
    </Row>
  );
};

ReplayRow.propTypes = {
  authorEmail: PropTypes.string.isRequired,
  typeOfReplay: PropTypes.func.isRequired,
  recipients: PropTypes.arrayOf(PropTypes.string),
};

ReplayRow.defaultProps = {
  recipients: [''],
};

export default ReplayRow;
