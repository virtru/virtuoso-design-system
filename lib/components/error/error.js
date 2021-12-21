import React from 'react';
import { Button, Typography } from 'antd';
import styles from './error.css';
import { ReactComponent as Error } from '../../assets/illustrationError.svg';

const { Link } = Typography;

const error = () => {
  return (
    <div className={styles.vdsContainer}>
      <div className={styles.vdsTopText}>Couldn&apos;t load</div>
      <Error />
      <div className={styles.vdsNav}>
        <Button onClick={() => window.location.reload()}>Retry</Button>
        <Link target="_blank" href="https://support.virtru.com/hc/en-us" className={styles.vdsLink}>
          Support
        </Link>
      </div>
    </div>
  );
};

export default error;
